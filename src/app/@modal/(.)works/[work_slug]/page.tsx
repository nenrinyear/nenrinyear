import Modal from "@/components/modal";
import WorkDetail from "@/components/WorkDetail";
import { getAllFiles, getMarkdown, markdownToHTML } from "@/lib/getMarkdown";
import { Work } from "@/type/Works";

export async function generateStaticParams() {
    const works_file = await getAllFiles("contents/works");
    const paths = works_file.map((work) => {
        return {
            work_slug: work.slug,
        };
    });

    return paths;
}

export default async function WorksModal({
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
        <Modal>
            <WorkDetail html={html} data={data} />
        </Modal>
    )
}