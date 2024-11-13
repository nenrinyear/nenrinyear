import Modal from "@/components/modal";
import WorkDetail from "@/components/WorkDetail";
import { getAllFiles, getMarkdown, markdownToHTML } from "@/lib/getMarkdown";
import { Work, WorkSchema } from "@/type/Works";

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
    const { data, content } = md as { data: unknown, content: string } as { data: Work, content: string };

    const html = await markdownToHTML(content);


    const _safeparsed_data = WorkSchema.safeParse(data);
    if (_safeparsed_data.success === false) {
        const errors = _safeparsed_data.error.flatten().fieldErrors;
        console.error(errors);
        return (
            <div style={{ overflow: "auto" }}>
                <h1>Error</h1>
                <pre>
                    <code>
                        {JSON.stringify({
                            errors,
                            data,
                            html,
                        }, null, 2)}
                    </code>
                </pre>
            </div>
        )
    }
    const safeparsed_data = _safeparsed_data.data;

    return (
        <Modal>
            <WorkDetail html={html} data={safeparsed_data} />
        </Modal>
    )
}