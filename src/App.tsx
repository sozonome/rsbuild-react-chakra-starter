import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from 'lib/layout';
import Routings from 'lib/router/Routings';
import { customTheme } from 'lib/styles/customTheme';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  );
};

export default App;
