import z from 'zod'

export const filterSchema = z.object({
	search: z.string().trim().nullable(),
	genres: z.array(z.string()).optional(),
	years: z.array(z.number()).optional(),
	ageLimits: z.array(z.number()).optional()
})

export type FilterSchema = z.infer<typeof filterSchema>
