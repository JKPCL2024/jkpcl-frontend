import { currentUser } from "@/lib/auth";
import { deleteFromCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { db } from "@/lib/db";
import { editMemberValidator } from "@/lib/validators/admin/members.validator";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function PATCH(req: NextRequest, { params }: { params: { memberId: string } }) {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const designation = formData.get("designation");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const photo = formData.get("photo");
    let validatedFields;
    if (photo) {
        validatedFields = editMemberValidator.safeParse({
            firstName,
            lastName,
            designation,
            email,
            mobile,
            photo,
        });
    } else {
        validatedFields = editMemberValidator.safeParse({
            firstName,
            lastName,
            designation,
            email,
            mobile,
        });
    }

    if (!validatedFields.success) {
        return NextResponse.json({
            success: false,
            data: null,
            message: validatedFields.error.errors[0].message || "Invalid form data",
        }, {
            status: 400
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

        const { firstName, lastName, designation, email, mobile, photo } = validatedFields.data;


        const existedMember = await db.member.findUnique({
            where: {
                id: params.memberId
            }
        });

        if (!existedMember) {
            return NextResponse.json({
                success: false,
                data: null,
                message: "Member not found",
            }, {
                status: 404
            });

        }

        let cloudinaryImage;
        let public_id;
        let secure_url;
        if (photo) {
            cloudinaryImage = await uploadToCloudinary(photo, "members");
            // @ts-ignore
            public_id = cloudinaryImage.data.public_id;
            // @ts-ignore
            secure_url = cloudinaryImage.data.secure_url;
            if (!cloudinaryImage.success) {
                return NextResponse.json({
                    success: false,
                    data: null,
                    message: cloudinaryImage.message || "Error uploading image",

                }, {
                    status: 500
                });
            }
            await deleteFromCloudinary([existedMember?.photoPublicId], "image");
        }

        if (!cloudinaryImage) {
            public_id = existedMember?.photoPublicId;
            secure_url = existedMember?.photoUrl;
        }

        const member = await db.member.update({
            where: {
                id: existedMember.id
            },
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


        revalidatePath("/dashboard/admin/members");
        revalidatePath(`/dashboard/admin/members/${member.id}`);
        revalidatePath("/about");
        return NextResponse.json({
            success: true,
            data: member,
            message: "Member updated successfully",
        }, {
            status: 200
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({
            success: false,
            data: null,
            message: error.message || "Error editing member",
        }, {
            status: 500
        });
    }
}