import { currentUser } from "@/lib/auth";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { noticeId: string } }) {
    const noticeId = params.noticeId;

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


        const notice = await db.notice.delete({
            where: {
                id: noticeId,
            }
        });

        const deleteNotice = await deleteFromCloudinary([notice.publicId], "image");

        return NextResponse.json({
            success: true,
            data: notice,
            message: "Notice deleted successfully",
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            data: null,
            message: "Error adding notice",
        }, {
            status: 500
        });
    }
}