import WorkDetail from "@/components/WorkDetail";
import { getAllFiles, getMarkdown, markdownToHTML } from "@/lib/getMarkdown";
import "@/app/content.css";
import { Work } from "@/type/Works";

export async function generateStaticParams() {
    const works_file = await getAllFiles("contents/works");
    const paths = works_file.map((work) => {
        return {
            params: {
                work_slug: work.slug,
            },
        };
    });

    return paths;
}

export default async function WorksPage({
    params
}: {
    params: Promise<{ work_slug: string }>
}) {
    const { work_slug } = await params;

    const md = await getMarkdown(`contents/works/${work_slug}.md`);
    console.log("md: ", md);
    const { data, content } = md as { data: unknown, content: string } as { data: Work, content: string };

    const html = await markdownToHTML(content);
    console.log("html: ", html);
    return (
        <div className="mt-8">
            <WorkDetail html={html} data={data} />
        </div>
    )
}