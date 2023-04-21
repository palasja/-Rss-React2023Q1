import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';

export function render(url: string, opts: RenderToPipeableStreamOptions | undefined) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StaticRouter>,
    opts
  );
  return stream;
}
