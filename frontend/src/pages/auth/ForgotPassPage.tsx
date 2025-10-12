import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';

export const ForgotPassPage = ({ className, ...props }: React.ComponentProps<'form'>) => {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold uppercase">Forgot Password</h1>
          <p className="text-muted-foreground text-left text-sm font-medium">
            Don't worry, we've got you covered. Please enter your email address to receive a
            temporary password.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="deep@example.com" required />
        </Field>
        <Field>
          <Button type="submit" className="bg-indigo-700">
            Continue
          </Button>
        </Field>
        <Field>
          <div className="flex items-center justify-center text-[14px] font-medium">
            Back to
            <Link to={paths.login} className="ml-2 font-semibold text-indigo-700 hover:underline">
              Sign in
            </Link>
          </div>
        </Field>
      </FieldGroup>
    </form>
  );
};
