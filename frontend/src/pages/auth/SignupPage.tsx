import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/schemas/signup-schema';
import type { SignupFormSchema } from '@/schemas/signup-schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Google, Apple } from '@/config/icons';

export const SignupPage = ({
  className,
  ...props
}: React.ComponentProps<'form'>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormSchema) => {
    console.log('Signup data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold uppercase">
            Create an account
          </h1>
          <p className="text-muted-foreground text-left text-sm font-medium">
            Enter your details below to get started.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Deep Halder"
            {...register('name')}
          />
          {errors.name && (
            <FieldError>{errors.name.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="deep@example.com"
            {...register('email')}
          />
          <FieldDescription className="text-xs font-medium">
            We&apos;ll use this to contact you. We will not
            share your email with anyone else.
          </FieldDescription>
          {errors.email && (
            <FieldError>{errors.email.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">
            Password
          </FieldLabel>
          <Input
            id="password"
            type="password"
            {...register('password')}
          />
          {errors.password && (
            <FieldError>
              {errors.password.message}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">
            Confirm Password
          </FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <FieldError>
              {errors.confirmPassword.message}
            </FieldError>
          )}
        </Field>
        <FieldDescription className="px-6 text-center text-[13px] font-medium">
          By clicking continue, you agree to our{' '}
          <Link
            to="/"
            className="text-indigo-500 hover:text-indigo-700"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/"
            className="text-indigo-500 hover:text-indigo-700"
          >
            Privacy Policy
          </Link>
          .
        </FieldDescription>
        <Field>
          <Button type="submit" className="bg-indigo-700">
            Create account with Email
          </Button>
        </Field>
        <Field>
          <div className="flex items-center justify-center text-[14px] font-medium">
            Already have an account?
            <Link
              to={paths.login}
              className="ml-2 font-semibold text-indigo-700 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </Field>
        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card mt-6">
          Or
        </FieldSeparator>
        <Field className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button">
            <Apple />
            <span>Continue with Apple</span>
          </Button>
          <Button variant="outline" type="button">
            <Google />
            <span>Continue with Google</span>
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
