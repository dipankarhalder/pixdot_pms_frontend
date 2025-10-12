import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { paths } from '@/config/paths';
import { cn } from '@/lib/utils';
import { Google, Apple } from '@/config/icons';
import { signinSchema } from '@/schemas/signin-schema';
import type { SigninFormSchema } from '@/schemas/signin-schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldError,
} from '@/components/ui/field';

export const SigninPage = ({
  className,
  ...props
}: React.ComponentProps<'form'>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormSchema>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (data: SigninFormSchema) => {
    console.log('Form Data:', data);
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
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-left text-sm font-medium">
            Sign in to continue to your performance
            dashboard.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="deep@example.com"
            {...register('email')}
          />
          {errors.email && (
            <FieldError>{errors.email.message}</FieldError>
          )}
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">
              Password
            </FieldLabel>
            <Link
              to={paths.forgot}
              className="ml-auto text-[13px] font-semibold text-indigo-700 underline-offset-4 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
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
          <Button type="submit" className="bg-indigo-700">
            Sign in with Email
          </Button>
        </Field>
        <Field>
          <div className="flex items-center justify-center text-[14px] font-medium">
            Don't have an account?
            <Link
              to={paths.register}
              className="ml-2 font-semibold text-indigo-700 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </Field>
        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card mt-6">
          Or continue with
        </FieldSeparator>
        <Field className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button">
            <Apple />
            <span>Sign in with Apple</span>
          </Button>
          <Button variant="outline" type="button">
            <Google />
            <span>Sign in with Google</span>
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
