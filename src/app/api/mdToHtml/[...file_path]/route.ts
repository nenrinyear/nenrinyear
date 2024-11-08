import { getMarkdown, markdownToHTML } from "@/lib/getMarkdown";
import { getRawContent } from "@/lib/r2";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: {
        params: Promise<{
            file_path: string;
        }>
    },
) {
    console.log("params: ", params);
    const { file_path } = await params;
    const file_path_str = decodeURIComponent(file_path);
    console.log("file_path: ", file_path_str);

    const file = await getRawContent(file_path_str);
    if (!file) {
        return NextResponse.json({
            error: "file not found",
        });
    }
    const markdown = await getMarkdown(file);
    if (!markdown) {
        return NextResponse.json({
            error: "markdown parse error",
        });
    }
    const { content, data } = markdown;
    const html = await markdownToHTML(content);


    return NextResponse.json({
        html: html,
        frontMatter: data,
    })
}