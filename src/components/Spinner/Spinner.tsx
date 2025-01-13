import React from 'react';
import './Spinner.css'; // Добавьте стили для спиннера

const Spinner: React.FC = () => (
  <div className="spinner">
    <div className="spinner__circle"></div>
    <p>Loading...</p>
  </div>
);

export default Spinner;
