import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, {
        message: 'Password must be at least 8 characters',
      })
      .regex(/[a-z]/, {
        message: 'Must include a lowercase letter',
      })
      .regex(/[A-Z]/, {
        message: 'Must include an uppercase letter',
      })
      .regex(/\d/, { message: 'Must include a number' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Must include a special character',
      }),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  );

export type SignupFormSchema = z.infer<typeof signupSchema>;
