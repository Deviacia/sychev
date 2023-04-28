import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Root from './routes';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={'/'}>
        <Root />
      </StaticRouter>
    </React.StrictMode>
  )
  return { html }
}
