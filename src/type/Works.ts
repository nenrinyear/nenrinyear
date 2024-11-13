import { z } from "zod";

const WorkSchema = z.object({
    slug: z.string().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    links: z.array(z.object({
        name: z.string(),
        url: z.string(),
    })).optional(),
});

type Work = z.infer<typeof WorkSchema>;

export type {
    Work,
}

export {
    WorkSchema,
}