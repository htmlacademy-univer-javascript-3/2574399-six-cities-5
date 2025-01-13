import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity, selectCity } from '../../store/reducer';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CitiesList: React.FC = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectCity);

  const handleCityClick = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Предотвращаем перезагрузку страницы
              handleCityClick(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
