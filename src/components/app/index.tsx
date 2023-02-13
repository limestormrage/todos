import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../../layout';
import { baseTheme } from '../../styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={baseTheme}>
      <Layout>
        <p>s</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
