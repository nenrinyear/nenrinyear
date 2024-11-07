import Modal from "@/components/modal";
import WorkDetail from "@/components/WorkDetail";
import { getAllFiles } from "@/lib/getMarkdown";

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
    return (
        <Modal>
            <WorkDetail work_slug={work_slug} />
        </Modal>
    )
}