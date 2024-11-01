import { getAllFiles, getMarkdown, markdownToReactElement } from "@/lib/getMarkdown";

export async function generateStaticParams() {
    const posts_file = getAllFiles("public/contents/posts");
    const paths = posts_file.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
        };
    });

    return paths;
}

export default async function PostDetail({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    const post = getMarkdown(`/public/contents/posts/${slug}.md`);
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
                {slug}
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
