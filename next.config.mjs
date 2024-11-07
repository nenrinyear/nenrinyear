/** @type {import('next').NextConfig} */
// Trying to : https://github.com/vercel/next.js/discussions/17218#discussioncomment-9686519
const nextConfig = {
    outputFileTracingIncludes: {
        "/contents/posts": [process.cwd() + '/contents/posts/**/*'],
        "/contents/works": [process.cwd() + '/contents/works/**/*'],
        "/public/contents/posts": [process.cwd() + '/public/contents/posts/**/*'],
        "/public/contents/works": [process.cwd() + '/public/contents/works/**/*'],
    },
};

export default nextConfig;
