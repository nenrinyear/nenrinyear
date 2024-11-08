import { Work } from "@/type/Works";

export default async function WorkDetail({ html, data }: { html: string, data: Work }) {
    return (
        <>
            <h1 className="
                text-2xl
                font-bold
                mb-4
                pb-2
                border-b-2
                border-gray-300
            ">
                {data.title}
            </h1>
            <p className="text-sm font-bold">
                {typeof data.date === "string" ? data.date : data.date.toDateString()}
            </p>
            <div className="mt-2">
                {data.tags && data.tags.map((tag, i) => (
                    <span key={i} className="
                        text-xs
                        bg-gray-200
                        dark:bg-gray-800
                        rounded-full
                        px-2
                        py-1
                        m-1
                    ">
                        {tag}
                    </span>
                ))}
            </div>
            <article className="
                w-full
                pt-2
                flex
                flex-col
                items-start
                justify-between
            ">
                {html && html.length > 0
                    ? <div dangerouslySetInnerHTML={{
                        __html: html
                    }} />
                    : data.description}
            </article>
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