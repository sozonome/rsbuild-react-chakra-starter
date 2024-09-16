import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';

// fonts
import '@fontsource-variable/plus-jakarta-sans';
import { customTheme } from '@/lib/styles/customTheme';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={customTheme.config?.initialColorMode} />
    <App />
  </React.StrictMode>,
);
