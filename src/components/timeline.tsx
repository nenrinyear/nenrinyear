import { Work } from "@/type/Works";
import clsx from "clsx";
import Link from "next/link";
import path from "path";

export default function Timeline({
    data,
    isLink = true,
    linkBase = "/works",
}: {
    data: Work[];
    isLink?: boolean;
    linkBase?: string;
}) {
    return (
        <div className="w-full flex flex-row justify-center flex-wrap">
            {data.map((work, index) => (
                <div
                    key={work.slug}
                    className={clsx(
                        "relative",
                        "flex",
                        "flex-col",
                        "items-start",
                        "w-full",
                        "pb-2 pl-6",
                        "before:absolute before:top-0 before:left-2 before:w-1 before:h-full before:bg-gray-300",
                        "after:absolute after:top-7 after:left-1 after:w-3 after:h-3 after:bg-slate-800 after:border-2 after:border-white after:rounded-full",
                    )}
                >
                    {isLink &&
                        <Link
                            href={path.join(linkBase, work.slug)}
                            className={clsx(
                                "p-6",
                                "hover:shadow-md hover:bg-gray-100 transition-all rounded-lg",
                                "dark:hover:bg-gray-900 dark:hover:shadow-gray-900",
                            )}
                        >
                            <div className="text-sm font-bold">
                                {work.date}
                            </div>
                            <div className="text-xl font-bold">
                                {work.title}
                            </div>
                            <div className="text-base">
                                {work.description}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                {work.tags && work.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={clsx(
                                            "text-xs",
                                            "bg-gray-200 dark:bg-gray-800",
                                            "rounded-full",
                                            "px-2 py-1 m-1",
                                        )}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    }
                </div>
            ))}
        </div>
    )
}