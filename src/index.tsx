import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const offerCount = 5; // Данные для компонента главной страницы

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount={offerCount} />
  </React.StrictMode>
);
