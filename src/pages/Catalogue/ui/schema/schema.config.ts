import z from "zod";

export const filterSchema = z.object({
    search: z.string()
        .trim(),
})

export type FilterSchema = z.infer<typeof filterSchema>;