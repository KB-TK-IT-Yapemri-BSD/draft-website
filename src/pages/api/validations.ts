import { z } from 'zod';

export const authSchema = z.object({
	email: z.string().email('Invalid Email').nonempty('Email is required'),
	password: z
		.string()
		.min(6, 'Password is too short')
		.nonempty('Password is required'),
});
