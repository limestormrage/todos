import React, { ReactElement } from 'react';
import { HeaderApp, HeaderTitle, HeaderWrapper } from './styles';

export default function Header(): ReactElement {
  return (
    <HeaderApp>
      <HeaderWrapper>
        <HeaderTitle>
          To-Do List
        </HeaderTitle>
      </HeaderWrapper>
    </HeaderApp>
  );
}
