import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
    <BrowserRouter>
      <Root />
    </BrowserRouter>
)
