import z from 'zod'

export const profileSchema = z.object({
	firstName: z
		.string()
		.trim()
		.max(50, { message: 'Максимальная длина поля - 50 символов' })
		.nullable(),
	lastName: z
		.string()
		.trim()
		.max(50, { message: 'Максимальная длина поля - 50 символов' })
		.nullable(),
	login: z
		.string()
		.trim()
		.min(3, { message: 'Минимальная длина логина - 3 символа' })
		.max(50, { message: 'Максимальная длина логина - 50 символов' })
		.nonempty(),
	imageUrl: z.string().trim().nullable()
})

export type ProfileSchema = z.infer<typeof profileSchema>
