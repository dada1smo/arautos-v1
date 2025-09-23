import React from 'react';
import { cn } from '../utils/cn';

interface TextProps {
  children: React.ReactNode;
  font?: 'primary' | 'secondary';
  color?: string;
  className?: string;
  tag?:
    | 'p'
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'strong'
    | 'em'
    | 'small';
}

export const Text: React.FC<TextProps> = ({
  children,
  font = 'primary',
  color = 'text-gray-900',
  className = '',
  tag = 'p',
}) => {
  const fontClass = font === 'primary' ? 'font-syne' : 'font-sans';
  return React.createElement(
    tag,
    { className: cn(fontClass, color, 'leading-snug', className) },
    children
  );
};

export default Text;
