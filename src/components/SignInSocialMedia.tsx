import { LinkHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';
import { LogoGitHub } from '../LogoGitHub';

export interface SignInSocialMediaProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function SignInSocialMedia({ children, asChild, className, ...props }: SignInSocialMediaProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={clsx(
        'flex items-center justify-center gap-3 py-3 px-4 bg-gray-800 rounded font-semibold text-gray-100 text-sm w-[200px] transition-colors hover:bg-gray-700 focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      <LogoGitHub />
      {children}
    </Comp>
  );
}
