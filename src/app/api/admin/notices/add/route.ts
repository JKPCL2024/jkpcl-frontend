import { NextRequest, NextResponse } from "next/server";
import { addNoticeValidator } from "@/lib/validators/admin/notice.validator";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const title = formData.get("title");
    const file = formData.get("file");
    const validatedFields = addNoticeValidator.safeParse({
        title,
        file,
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

        const { title, file } = validatedFields.data

        const cloudinaryImage = await uploadToCloudinary(file, "notices");

        // @ts-ignore
        const { secure_url, public_id } = cloudinaryImage.data;

        if (!cloudinaryImage.success) {
            return NextResponse.json({
                success: false,
                data: null,
                message: cloudinaryImage.message || "Error uploading image",

            }, {
                status: 500
            });
        }

        const notice = await db.notice.create({
            data: {
                title,
                url: secure_url,
                publicId: public_id,
                createdBy: user.id,
            },
        })

        return NextResponse.json({
            success: true,
            data: notice,
            message: "Notice added successfully",
        }, {
            status: 201
        });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            success: false,
            data: null,
            message: error.message || "Error adding notice",
        }, {
            status: 500
        });
    }
}