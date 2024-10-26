import Modal from "@/components/modal";
import WorkDetail from "@/components/WorkDetail";

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