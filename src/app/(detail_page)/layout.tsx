import "@/app/content.css";
import "highlight.js/styles/atom-one-dark.min.css";
import Link from "next/link";

export default function DetailLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="
                w-full
                mx-auto
                pt-2
                pl-4
                text-blue-400
                dark:text-blue-600
                hover:underline
            ">
                <Link href="/">
                    ← トップページに戻る
                </Link>
            </div>
            <section className="content">
                {children}
            </section>
        </>
    )
}