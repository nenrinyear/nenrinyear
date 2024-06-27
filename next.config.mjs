/** @type {import('next').NextConfig} */
// Trying to : https://github.com/vercel/next.js/discussions/17218#discussioncomment-9686519
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            "/contents/posts": [process.cwd() + '/contents/posts/**/*'],
        },
    },
};

export default nextConfig;
