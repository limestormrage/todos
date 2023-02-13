import React, { ReactElement } from 'react';
import { IContainerProps } from './interface';
import { StylesContainer } from './styles';

export default function Container({ children }: IContainerProps): ReactElement {
  return (
    <StylesContainer>
      {children}
    </StylesContainer>
  );
}
