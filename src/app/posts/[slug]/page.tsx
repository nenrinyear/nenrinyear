import { getAllPosts, getMarkdown, markdownToReactElement } from "@/libs/getMarkdown";

export async function generateStaticParams() {
    const posts = await getAllPosts("contents/posts");

    return posts.map((slug) => ({
        params: { slug },
    }));
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
    const { data: frontMatter, content: post} = getMarkdown(`contents/posts/${slug}.md`);

    return {
        title: frontMatter.title ?? slug,
        description: frontMatter.description,
        openGraph: {
            title: frontMatter.title ?? slug,
            description: frontMatter.description,
        },
        twitter: {
            title: frontMatter.title ?? slug,
            description: frontMatter.description,
        },
    };
}

export default async function PostDetail({ params: { slug = '404' } }: { params: { slug: string } }) {
    const { data: frontMatter, content: post } = getMarkdown(`contents/posts/${slug}.md`);

    return (
        <div className="
            w-full
            min-h-screen
            flex
            flex-col
            items-center
            justify-start
        ">
            <h1 className="
                text-4xl
                font-bold
                mt-4
                mb-4
            ">{frontMatter.title ?? slug}</h1>
            <div>
                {await markdownToReactElement(post)}
            </div>
        </div>
    );
}