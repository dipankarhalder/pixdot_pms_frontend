import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Google, Apple } from '@/config/icons';

export const SigninPage = ({ className, ...props }: React.ComponentProps<'form'>) => {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold uppercase">Welcome Back</h1>
          <p className="text-muted-foreground text-left text-sm">
            Sign in to continue to your performance dashboard.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-[14px] font-medium text-indigo-700 underline-offset-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit" className="bg-indigo-700">
            Sign in with Email
          </Button>
        </Field>
        <Field>
          <div className="flex items-center justify-center text-[14px]">
            Don't have an account?
            <a href="#" className="ml-2 font-semibold text-indigo-700 hover:underline">
              Sign up
            </a>
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
