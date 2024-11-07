import { z } from "zod";
import { WorkSchema } from "./Works";
import { PostSchema } from "./Posts";

const mdToHtmlSchema = z.object({
    file_path: z.string(),
    data: z.union([
        WorkSchema,
        PostSchema,
    ]),
    html: z.string(),
})

type MdToHtml = z.infer<typeof mdToHtmlSchema>;

export type {
    MdToHtml,
}
export {
    mdToHtmlSchema,
}