import React, { ReactElement } from 'react';
import Title from '../../../components/title';
import { HeaderApp } from './styles';

export default function Header(): ReactElement {
  return (
    <HeaderApp>
      <Title tag="h1">The-Do List</Title>
      <p>Where</p>
    </HeaderApp>
  );
}
