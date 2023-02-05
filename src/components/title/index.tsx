import React from 'react';
import { ITitleProps } from './interface';

export default function Title({ children, tag: Tag }: ITitleProps): JSX.Element {
  return (
    <Tag>
      {children}
    </Tag>
  );
}
