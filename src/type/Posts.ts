import { z } from "zod";

const PostSchema = z.object({
    slug: z.string().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    links: z.array(z.object({
        name: z.string(),
        url: z.string(),
    })).optional(),
});

type Post = z.infer<typeof PostSchema>;

export type {
    Post,
}
export {
    PostSchema,
}