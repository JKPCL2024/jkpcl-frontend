import { currentUser } from "@/lib/auth";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { memberId: string } }) {
    const memberId = params.memberId;

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


        const member = await db.member.delete({
            where: {
                id: memberId,
            }
        });

        const deletePhoto = await deleteFromCloudinary([member.photoPublicId], "image");

        return NextResponse.json({
            success: true,
            data: member,
            message: "Member deleted successfully",
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            data: null,
            message: "Error adding member",
        }, {
            status: 500
        });
    }
}