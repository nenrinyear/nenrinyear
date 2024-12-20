import { Work } from "@/type/Works";

export default async function WorkDetail({ html, data, ismodal = false }: { html: string, data: Work, ismodal?: boolean }) {
    return (
        <>
            <h1 className="
                md:text-2xl
                text-lg
                font-bold
                mb-4
                pb-2
                border-b-2
                border-gray-300
            ">
                {data.title}
            </h1>
            <div className="
                flex
                flex-row
                items-center
                justify-between
                flex-wrap
                mb-4
            ">
                <div className="
                    flex
                    flex-row
                    items-center
                    justify-start
                ">
                    <span className="text-sm font-bold">
                        {data.date}
                    </span>
                    <div className="
                        flex
                        flex-row
                        flex-wrap
                        ml-4
                    ">
                        {data.tags && data.tags.map((tag, i) => (
                            <span key={i} className="
                                text-xs
                                border
                                border-gray-600
                                rounded-full
                                px-2
                                py-1
                                md:m-1
                            ">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <a 
                    href={`https://static.publish.nenrin.me/contents/works/${data.slug}.md`}
                    target="_blank"
                    className="
                        text-blue-600
                        dark:text-blue-400
                        text-base
                        hover:underline
                    "
                    rel="noopener noreferrer"
                >
                    {data.slug}.md
                </a>
            </div>
            {html && html.length > 0
                ? <article
                    className="
                        w-full
                        pt-2
                        flex
                        flex-col
                        items-start
                        justify-between
                    "
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                : data.description}
            <div className="mt-2">
                {data.links && data.links.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        className="
                            text-blue-600
                            dark:text-blue-400
                            text-base
                            hover:underline
                            pr-4
                        "
                        rel="noopener noreferrer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </>
    );
}