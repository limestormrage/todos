import React from 'react';
import Header from './components/header/header';
import { ILayoutProps } from './interface';

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}
