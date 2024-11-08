import { getAllFiles } from "@/lib/getMarkdown"
import Link from "next/link";

export default async function PostList() {
    const posts = (await getAllFiles("contents/posts"))
        .sort((a, b) => {
            const a_date = (new Date(a.frontMatter.date)).getTime();
            const b_date = (new Date(b.frontMatter.date)).getTime();
            if (a_date < b_date) {
                return 1;
            } else {
                return -1;
            }
        }
    );

    return (
        <div className="
            w-full
            flex
            flex-col
            items-start
            justify-between
        ">
            <ul className="w-full h-full list-disc pl-4">
                {posts.map((post) => (
                    <li
                        key={post.slug}
                        className="
                            rounded-lg
                            my-4
                        "
                    >
                        <Link href={`/posts/${post.slug}`} className="w-full h-full hover:underline">
                            {post.frontMatter.title ?? post.slug}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}