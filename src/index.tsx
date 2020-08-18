import React from 'react';
import ReactDom from 'react-dom';
import { App } from './components/app';
import { applyPolyfills, defineCustomElements } from '@vertexvis/viewer-react';

function main(element: Element): void {
  applyPolyfills().then(() => defineCustomElements(window));
  ReactDom.render(
    <App streamKey="MDT1fj86GfiEK9qnYp62E-zRMAy_5ohnOA==" env="platdev" />,
    element
  );
}

const element = window.document.querySelector('#app');
if (element != null) {
  main(element);
}
