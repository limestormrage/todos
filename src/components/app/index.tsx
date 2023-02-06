import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../../layout';
import { baseTheme } from '../../styles/theme';
import { Wrapper } from './styles';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={baseTheme}>
      <Wrapper>
        <Layout>
          <p>WContent</p>
          Title
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
