import { getAllContents } from "@/lib/r2";
import { NextResponse } from "next/server";
export async function GET() {
    // cwdのすべてのファイル一覧を取得
    const files = await getAllContents();
    console.log("files: ", files);

    return NextResponse.json({
        files: files,
    });
}