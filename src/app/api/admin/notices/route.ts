import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const notices = await db.notice.findMany();
        return NextResponse.json({
            success: true,
            data: notices,
            message: "Notices fetched successfully"
        }, {
            status: 200
        });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            success: false,
            data: null,
            message: error?.message || "Failed to fetch notices"
        }, {
            status: 500
        })
    }
}
