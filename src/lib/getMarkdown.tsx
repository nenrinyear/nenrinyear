import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import path from 'path';
import { getAllContents, getRawContent } from './r2';
import rehypeHighlight from 'rehype-highlight';

export const getAllFiles = async (dirPath: string = "contents/posts") => {
    const fullPath = path.join(
        process.env.NEXT_PUBLIC_R2_STATIC_URL ?? "",
        dirPath
    );

    const allfiles = await getAllContents();
    if (!allfiles || allfiles.length === 0) {
        return [];
    }
    const files = allfiles.filter((file) => {
        return file.Key?.startsWith(dirPath) && file.Key?.endsWith(".md");
    });

    // await getContentで取得したデータを返す

    const filesData = await Promise.all(
        files.map(async (file) => {
            const fileRaw = await getRawContent(file.Key ?? "");
            if (!fileRaw) {
                return null;
            }
            const { data } = matter(fileRaw);
            return {
                frontMatter: data,
                slug: file.Key?.replace(fullPath, "").split("/").pop()?.replace(".md", ""),
            };
        })
    );

    return filesData.filter((file) => file !== null);
};

export const getMarkdown = async (key: string) => {
    const response = await getRawContent(key);
    if (!response) {
        return null;
    }

    const { content, data } = matter(response);
    if ("date" in data) {
        if (typeof data.date === "object") {
            const _date_string = data.date.toISOString();
            data.date = _date_string.slice(0, _date_string.indexOf("T"));
        }
    }
    const slug = key.split("/").pop()?.replace(".md", "");
    data.slug = slug;
    return { content, data };
}


export const markdownToHTML = async (mdContent: string) => {
    const returnHtml = await remark()
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkRehype, {
            allowDangerousHtml: true,
        })
        .use(rehypeHighlight)
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(mdContent);

    return returnHtml.toString();
}
