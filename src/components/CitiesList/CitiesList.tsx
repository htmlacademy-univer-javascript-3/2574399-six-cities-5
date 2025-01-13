import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/reducer';
import { RootState } from '../../store';

const CitiesList: React.FC = () => {
  const dispatch = useDispatch();
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const activeCity = useSelector((state: RootState) => state.app.city);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={() => dispatch(changeCity(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
