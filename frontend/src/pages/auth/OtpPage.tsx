import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpSchema } from '@/schemas/otp-schema';
import type { OtpFormSchema } from '@/schemas/otp-schema';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

export const OtpPage = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OtpFormSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const otpValue = watch('otp');
  const handleChange = (value: string) => {
    setValue('otp', value);
  };

  const onSubmit = (data: OtpFormSchema) => {
    console.log('OTP submitted:', data);
  };

  return (
    <div
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">
              Enter verification code
            </h1>
            <p className="text-muted-foreground text-sm text-balance">
              We sent a 6-digit code to your email.
            </p>
          </div>
          <Field>
            <FieldLabel htmlFor="otp" className="sr-only">
              Verification code
            </FieldLabel>
            <InputOTP
              maxLength={6}
              id="otp"
              value={otpValue}
              onChange={handleChange}
              required
            >
              <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {errors.otp && (
              <FieldError>{errors.otp.message}</FieldError>
            )}
            <FieldDescription className="text-center">
              Enter the 6-digit code sent to your email.
            </FieldDescription>
          </Field>
          <Button type="submit">Verify</Button>
          <FieldDescription className="text-center">
            Didn&apos;t receive the code?{' '}
            <a href="#">Resend</a>
          </FieldDescription>
        </FieldGroup>
      </form>
    </div>
  );
};
