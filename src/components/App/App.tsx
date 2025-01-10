import React from 'react';
import MainPage from '../MainPage/MainPage';

type AppProps = {
  offerCount: number;
};

const App: React.FC<AppProps> = ({ offerCount }) => (
  <div className="app">
    <MainPage offerCount={offerCount} />
  </div>
);

export default App;
