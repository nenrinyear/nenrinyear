import { getAllFiles, getMarkdown, markdownToHTML } from "@/lib/getMarkdown";
import { Post } from "@/type/Posts";

export async function generateStaticParams() {
    const posts_file = await getAllFiles("contents/posts");
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

    const post = await getMarkdown(`contents/posts/${slug}.md`);
    if (!post) {
        return <div>Post not found</div>;
    }
    const { data, content } = post as { data: Post, content: string };
    const html = await markdownToHTML(content);
    console.log(data);

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
                {data.title ?? slug}
            </h1>
            <p className="
                text-base
                pt-1
                pb-1
            ">
                {`${data.date.getFullYear()}-${data.date.getMonth() + 1}-${data.date.getDate()}`}
            </p>
            <article className="
                w-full
                flex
                flex-col
                items-start
                justify-between
            ">
                {
                    content && content.length > 0
                        ? <div dangerouslySetInnerHTML={{
                            __html: html
                        }} />
                        : data.description
                }
            </article>
        </div>
    )
}
