import { getMarkdown } from "@/lib/getMarkdown";
import { Work } from "@/type/Works";

export default function WorkDetail({ work_slug }: { work_slug: string }) {
    const work = getMarkdown(`contents/works/${work_slug}.md`);
    const { data, content } = work;
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <p>{data.tags}</p>
            <div>{content}</div>
        </div>
    );
}