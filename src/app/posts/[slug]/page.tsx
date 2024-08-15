import { getMarkdown, markdownToReactElement } from "@/lib/getMarkdown";

export default function PostDetail({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const { slug } = params;

    const post = getMarkdown(`/contents/posts/${slug}.md`);
    const { data, content } = post;
    const contentbyJSX = markdownToReactElement(content);

    return (
        <div className="
            w-full
            min-h-screen
            mx-auto
            p-4
        ">
            <h1 className="
                text-4xl
                font-bold
                mb-4
                pt-[64px]
                pb-2
                border-b-2
                border-gray-300
            ">
                {params.slug}
            </h1>
            <article className="
                w-full
                flex
                flex-col
                items-start
                justify-between
            ">
                {contentbyJSX}
            </article>
        </div>
    )
}
