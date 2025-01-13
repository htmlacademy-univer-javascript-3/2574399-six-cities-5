import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './store';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App offerCount={offers.length} offers={offers} reviews={reviews} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
