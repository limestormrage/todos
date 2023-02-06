import React, { ReactElement } from 'react';
import Title from '../../../components/title';
import { HeaderApp } from './styles';

export default function Header(): ReactElement {
  return (
    <HeaderApp>
      <Title tag="h1">To-Do List</Title>
    </HeaderApp>
  );
}
