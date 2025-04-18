import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { deleteFromCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { updateNoticeValidator } from "@/lib/validators/admin/notice.validator";

export async function PATCH(req: NextRequest, { params }: { params: { noticeId: string } }) {
    const formData = await req.formData();
    const title = formData.get("title");
    const file = formData.get("file");
    const validatedFields = updateNoticeValidator.safeParse({
        title,
        file
    });

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

        const { title } = validatedFields.data;


        const existedNotice = await db.notice.findUnique({
            where: {
                id: params.noticeId
            }
        });

        if (!existedNotice) {
            return NextResponse.json({
                success: false,
                data: null,
                message: "Notice not found",
            }, {
                status: 404
            });

        }

        let cloudinaryImage;
        let public_id;
        let secure_url;
        if (validatedFields.data.file) {
            cloudinaryImage = await uploadToCloudinary(validatedFields.data.file, "notices");
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
            await deleteFromCloudinary([existedNotice?.url], "image");
        }

        if (cloudinaryImage) {
            public_id = existedNotice?.publicId;
            secure_url = existedNotice?.url;
        }

        const member = await db.notice.update({
            where: {
                id: params.noticeId
            },
            data: {
                title,
                publicId: cloudinaryImage ? public_id : existedNotice?.publicId,
                url: cloudinaryImage ? secure_url : existedNotice?.url,
            },
        })


        revalidatePath("/dashboard/admin/notices");
        revalidatePath("/");
        return NextResponse.json({
            success: true,
            data: member,
            message: "Notice updated successfully",
        }, {
            status: 200
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({
            success: false,
            data: null,
            message: error.message || "Error editing notice",
        }, {
            status: 500
        });
    }
}