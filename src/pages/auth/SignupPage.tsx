import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

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
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
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
          <div className="relative">
            <Input
              id="confirm-password"
              type={
                showConfirmPassword ? 'text' : 'password'
              }
              {...register('confirmPassword')}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword((prev) => !prev)
              }
              className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2"
              tabIndex={-1}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
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
          <Button
            variant="outline"
            type="button"
            className="bg-gray-50"
          >
            <Google />
            <span>Google</span>
          </Button>
          <Button
            variant="outline"
            type="button"
            className="bg-gray-50"
          >
            <Apple />
            <span>Apple</span>
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
