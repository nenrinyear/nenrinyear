import LogoGithub from "@/components/logo-github";
import LogoX from "@/components/logo-x";
import LogoLinkedIn from "@/components/logo-linkedin";
import PostList from "./PostsList";
import SkillList from "./SkillList";
import WorksList from "./WorksList";
import Certificates from "./Certificates";
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
                    <LogoLinkedIn />
                </div>
                <SkillList />
                <Certificates />
                <WorksList />
            </section>
            <section className="
                w-full
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
