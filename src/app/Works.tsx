import Timeline from "@/components/timeline";
import { getAllFiles } from "@/lib/getMarkdown";
import { Work } from "@/type/Works";


export default function WorksList() {
    const works_file = getAllFiles("public/contents/works").sort((a, b) => {
        const a_date = (new Date(a.frontMatter.date)).getTime();
        const b_date = (new Date(b.frontMatter.date)).getTime();
        if (a_date < b_date) {
            return 1;
        } else {
            return -1;
        }
    });
    const works: Work[] = works_file.map((work) => {
        return {
            slug: work.slug,
            title: work.frontMatter.title,
            date: work.frontMatter.date,
            description: work.frontMatter.description,
            tags: work.frontMatter.tags,
        }
    });

    return (
        <div>
            <h2
                id="works"
                className="
                    text-3xl
                    font-bold
                    mb-4
                    pt-[64px]
                    pb-2
                    border-b-2
                    border-gray-300
                "
            >
                <a
                    href="#works"
                    className="
                        text-3xl
                        font-bold
                        mt-4
                        mb-4
                        pb-2
                    "
                >
                    Works
                </a>
            </h2>
            <div className="overflow-x-auto">
                <Timeline data={works} />
            </div>
        </div>
    )
}