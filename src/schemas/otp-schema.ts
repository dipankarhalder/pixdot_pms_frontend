import { z } from 'zod';

export const otpSchema = z.object({
  otp: z
    .string()
    .min(6, { message: 'OTP must be 6 digits' })
    .max(6, { message: 'OTP must be 6 digits' })
    .regex(/^\d{6}$/, {
      message: 'OTP must contain only numbers',
    }),
});

export type OtpFormSchema = z.infer<typeof otpSchema>;
