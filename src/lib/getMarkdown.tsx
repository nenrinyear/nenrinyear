import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { Fragment, createElement } from 'react';
import { jsx } from 'react/jsx-runtime';
import rehypeRaw from 'rehype-raw';
import rehypeReact, { Components, Options } from 'rehype-react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import path from 'path';

export const getAllPosts = (dirPath: string = "/contents/posts/") => {
    const fullPath = path.join(process.cwd(), dirPath);
    const files = fs.readdirSync(fullPath);
    return files.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const content = fs.readFileSync(`${fullPath}/${fileName}`, 'utf8');

        const { data } = matter(content);
        return {
            slug,
            frontMatter: data,
        };
    });
};

export const getMarkdown = (filePath: string) => {
    const fullPath = path.join(process.cwd(), filePath);
    const contents = fs.readFileSync(fullPath, 'utf8');

    return matter(contents);
}

const toReactComponent: Partial<Components> = {
    h1: ({ children }) =>
        <h1 className="text-4xl font-bold mt-6 pb-4"># {children}</h1>,
    h2: ({ children }) =>
        <h2 className="text-3xl font-bold mt-6 pb-3">## {children}</h2>,
    h3: ({ children }) =>
        <h3 className="text-2xl font-bold mt-6 pb-3">### {children}</h3>,
    h4: ({ children }) =>
        <h4 className="text-xl font-bold mt-6 pb-3">#### {children}</h4>,
    h5: ({ children }) =>
        <h5 className="text-lg font-bold mt-6 pb-3">##### {children}</h5>,
    h6: ({ children }) =>
        <h6 className="text-base font-bold t-2 pb-3">###### {children}</h6>,
    p: ({ children }) =>
        <p className="text-base mt-1 mb-1 pt-2 pb-1">{children}</p>,
    a: ({ children, href }) => {
        return href?.startsWith("/") ? (
            <Link href={href}>
                {children}
            </Link>
        ) : (
            <a
                href={href}
                target="_blank"
                    className="text-blue-600 dark:text-blue-400 text-base hover:underline p-2"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    },
    ul: ({ children }) => 
        <ul className="text-base list-disc pl-4 
        [&>li]:marker:content-
    ">{children}</ul>,
    ol: ({ children }) => 
        <ol className="text-base list-decimal pl-5">{children}</ol>,
    li: ({ children }) =>
        <li className="text-base mt-1 mb-1">{children}</li>,
    pre: ({ children }) =>
        <pre className="p-4 flex flex-col rounded-lg overflow-x-auto">```<>{children}</>```</pre>,
    code: ({ children }) => <code>{children}</code>,
}


export const markdownToReactElement = async (mdContent: string) => {
    "use client";

    const returnHtml = await remark()
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkRehype, {
            allowDangerousHtml: true,
        })
        .use(rehypeRaw)
        .use(rehypeShiki, {
            themes: {
                light: 'vitesse-light',
                dark: 'vitesse-dark',
            },
        })
        .use(rehypeReact, {
            Fragment,
            createElement,
            components: toReactComponent,
            jsx: jsx as any,
            jsxDEV: jsx as any,
            development: true,
        } as Options)
        .process(mdContent);

    console.log(returnHtml);
    return returnHtml.result;
}
