import z from 'zod'

export const filterSchema = z.object({
	search: z.string().trim().nullable(),
	genres: z.array(z.string()).nullable(),
	years: z.array(z.number()),
	ageLimits: z.array(z.number())
})

export type FilterSchema = z.infer<typeof filterSchema>
