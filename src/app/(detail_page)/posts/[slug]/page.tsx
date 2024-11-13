import { getAllFiles, getMarkdown, markdownToHTML } from "@/lib/getMarkdown";
import { Post, PostSchema } from "@/type/Posts";

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

    const _safeparsed_data = PostSchema.safeParse(data);
    if (_safeparsed_data.success === false) {
        const errors = _safeparsed_data.error.flatten().fieldErrors;
        console.error(errors);
        return (
            <div style={{ overflow: "auto" }}>
                <h1>Error</h1>
                <pre>
                    <code>
                        {JSON.stringify({
                            errors,
                            data,
                            html,
                        }, null, 2)}
                    </code>
                </pre>
            </div>
        )
    }
    const safeparsed_data = _safeparsed_data.data;

    return (
        <div className="
            w-full
            min-h-screen
            mx-auto
            px-4
        ">
            <h1 className="
                text-4xl
                font-bold
                mb-4
                border-b-2
                border-gray-300
            ">
                {safeparsed_data.title ?? slug}
            </h1>
            <p className="
                text-base
                pt-1
                pb-1
            ">
                {safeparsed_data.date}
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
                        : safeparsed_data.description
                }
            </article>
        </div>
    )
}
