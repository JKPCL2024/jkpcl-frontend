import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const members = await db.member.findMany();
        return NextResponse.json({
            success: true,
            data: members,
            message: "Members fetched successfully"
        }, {
            status: 200
        });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            success: false,
            data: null,
            message: error?.message
        }, {
            status: 500
        })
    }
}
