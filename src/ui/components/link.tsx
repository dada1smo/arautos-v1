import * as React from 'react';
import { createLink, LinkComponent } from '@tanstack/react-router';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // Add any additional props you want to pass to the anchor element
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    return <a ref={ref} {...props} />;
  }
);

export type BasicLinkProps = LinkComponent<typeof BasicLinkComponent>;

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const Link: BasicLinkProps = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};
