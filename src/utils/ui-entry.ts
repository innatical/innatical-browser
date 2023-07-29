import * as ReactDOM from 'react-dom/client';
import * as React from 'react';

import { configureUI } from '~/common/renderer-config';
import { ipcRenderer } from 'electron';

export const renderUI = (Component: any) => {
  ipcRenderer.setMaxListeners(0);
  configureUI();

  
  const container = document.getElementById('app');

// convert to react 18
  let root = ReactDOM.createRoot(container);
  
  root.render(React.createElement(Component));
};
