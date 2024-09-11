import clsx from 'clsx';
import { ButtonHTMLAttributes, ComponentProps, FC, ReactNode } from 'react';

type TVariant = 'primary' | 'secondary';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: ComponentProps<'button'>['className'];
  variant?: TVariant;
};

const Button: FC<TProps> = ({
  children,
  className,
  variant = 'primary',
  ...rest
}) => {
  const variantConfig: Record<TVariant, ComponentProps<'button'>['className']> =
    {
      primary:
        'text-white rounded-xl transition-all hover:scale-105 px-4 py-2 active:translate-y-1 bg-purple-600',
      secondary:
        'text-purple-300 rounded-xl transition-all hover:scale-105 px-4 py-2 active:translate-y-1 border-[1px] border-purple-600',
    };

  return (
    <button className={clsx(variantConfig[variant], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
