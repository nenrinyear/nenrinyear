import { getAllPosts } from "@/libs/getMarkdown"

export default async function PostList() {
    const posts = getAllPosts();

    return (
        <div className="
            w-full
            flex
            flex-col
            items-start
            justify-between
        ">
            <ul className="w-full h-full">
                {posts.map((post) => (
                    <li
                        key={post.slug}
                        className="
                            flex
                            bg-gray-100
                            dark:bg-gray-800
                            rounded-lg
                            hover:shadow-lg
                            transition-shadow
                            duration-100
                            pt-2
                            pb-2
                        "
                    >
                        <a href={`/posts/${post.slug}`} className="w-full h-full p-4">
                            {post.frontMatter.title ?? post.slug}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}