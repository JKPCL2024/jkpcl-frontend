import { currentUser } from "@/lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { db } from "@/lib/db";
import { addMemberValidator } from "@/lib/validators/admin/members.validator";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const designation = formData.get("designation");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const photo = formData.get("photo");
    const validatedFields = addMemberValidator.safeParse({
        firstName,
        lastName,
        designation,
        email,
        mobile,
        photo,
    });

    if (!validatedFields.success) {
        return NextResponse.json({
            success: false,
            data: null,
            message: validatedFields.error.message[0],
        });
    }

    try {
        const user = await currentUser();
        if (!user?.id) {
            return NextResponse.json({
                success: false,
                data: null,
                message: "You are not authenticated",
            }, {
                status: 403
            });
        }

        if (user.role !== "ADMIN") {
            return NextResponse.json({
                success: false,
                data: null,
                message: "You are not authorized to perform this action",
            }, {
                status: 401
            });
        }

        const { firstName, lastName, designation, email, mobile, photo } = validatedFields.data

        const isMemberExist = await db.member.findUnique({
            where: {
                email
            }
        });
        if (isMemberExist) {
            return NextResponse.json({
                success: false,
                data: null,
                message: "Member already exists",
            }, {
                status: 409
            });
        }

        const cloudinaryImage = await uploadToCloudinary(photo, "members");

        // @ts-ignore
        const { secure_url, public_id } = cloudinaryImage.data;

        revalidatePath(`${process.env.NEXT_PUBLIC_HOST_URL}/dashboard/admin/members`);
        revalidatePath(`${process.env.NEXT_PUBLIC_HOST_URL}/about`);

        if (!cloudinaryImage.success) {
            return NextResponse.json({
                success: false,
                data: null,
                message: cloudinaryImage.message || "Error uploading image",

            }, {
                status: 500
            });
        }

        const member = await db.member.create({
            data: {
                firstName,
                lastName,
                designation,
                email,
                mobile,
                photoUrl: secure_url,
                photoPublicId: public_id,
            },
        })

        return NextResponse.json({
            success: true,
            data: member,
            message: "Member added successfully",
        }, {
            status: 201
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({
            success: false,
            data: null,
            message: error.message || "Error adding member",
        }, {
            status: 500
        });
    }
}