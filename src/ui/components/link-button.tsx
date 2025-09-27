import { VariantProps } from 'class-variance-authority';
import { ComponentProps, FunctionComponent } from 'react';
import { Button, buttonVariants } from './button';
import { Link } from './link';

type LinkButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    link: ComponentProps<typeof Link>;
  };

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  link,
  children,
  ...props
}) => {
  return (
    <Button {...props} asChild={true}>
      <Link {...link} to={link.to as string}>
        {children}
      </Link>
    </Button>
  );
};

export default LinkButton;
