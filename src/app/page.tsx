import LogoGithub from "@/components/logo-github";
import LogoX from "@/components/logo-x";
import PostList from "@/components/postList";
import StaticRating from "@/components/rating";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="
                w-full
                min-h-screen
                mx-auto
                p-4
            ">
                <h1
                    id="about"
                    className="
                        text-4xl
                        font-bold
                        mb-4
                        pt-[64px]
                        pb-2
                        border-b-2
                        border-gray-300
                    "
                >
                    <a
                        href="#about"
                        className="
                            text-4xl
                            font-bold
                            mb-4
                            pb-2
                        "
                    >
                        About me
                    </a>
                </h1>
                <div className="
                    w-full
                    flex
                    flex-row
                    justify-center
                    items-center
                ">
                    <p className="
                        w-3/4
                        text-base
                        pt-1
                        pb-1
                    ">
                        ねんりんです。Web関連技術だいたい好きです。ぜひ話しかけてください
                    </p>
                    <Image
                        width={120}
                        height={120}
                        src="/nenrin_icon.jpg"
                        alt="nenrin"
                        className="
                            w-1/4
                            rounded-full
                            mt-4
                            mb-4
                        "
                    />
                </div>
                <div className="
                    flex
                    flex-row
                    justify-start
                    items-center
                    mt-4
                    w-full
                    h-full
                ">
                    <LogoX />
                    <LogoGithub />
                </div>

                {/* スキルリスト */}
                <div>
                    <h2
                        id="skills"
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
                            href="#skills"
                            className="
                                text-3xl
                                font-bold
                                mt-4
                                mb-4
                                pb-2
                            "
                        >
                            Skills
                        </a>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Technology</th>
                                    <th>できる度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JavaScript</td>
                                    <td><StaticRating name="js" rate={4} /></td>
                                </tr>
                                <tr>
                                    <td>TypeScript</td>
                                    <td><StaticRating name="ts" rate={3} /></td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td><StaticRating name="react" rate={3} /></td>
                                </tr>
                                <tr>
                                    <td>Next.js</td>
                                    <td><StaticRating name="nextjs" rate={4} /></td>
                                </tr>
                                <tr>
                                    <td>PHP</td>
                                    <td><StaticRating name="php" rate={3} /></td>
                                </tr>
                                <tr>
                                    <td>Rust</td>
                                    <td><StaticRating name="rust" rate={1} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                            できる度は1: 書いたことある程度, 5: 人に教えられる程度 です
                        </p>
                    </div>
                </div>
            </section>
            <section className="
                w-full
                min-h-screen
                mx-auto
                p-4
            ">
                <h1
                    id="postList"
                    className="
                        text-4xl
                        font-bold
                        mb-4
                        pt-[64px]
                        pb-2
                        border-b-2
                        border-gray-300
                    "
                >
                    <a
                        href="#postList"
                        className="
                            text-4xl
                            font-bold
                            mb-4
                            pb-2
                        "
                    >
                        Posts
                    </a>
                
                </h1>
                <PostList />
            </section>
        </>
    );
}
