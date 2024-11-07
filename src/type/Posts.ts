import { z } from "zod";

const PostSchema = z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string().date(),
    description: z.string(),
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