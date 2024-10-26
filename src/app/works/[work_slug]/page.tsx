import WorkDetail from "@/components/WorkDetail";

export default async function WorksPage({
    params
}: {
    params: Promise<{ work_slug: string }>
}) {
    const { work_slug } = await params;
    return (
        <>
            <WorkDetail work_slug={work_slug} />
        </>
    )
}