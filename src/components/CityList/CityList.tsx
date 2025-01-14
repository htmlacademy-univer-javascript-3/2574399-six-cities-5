import { Link } from 'react-router-dom';

import { CITIES } from '../../mocks/city.ts';
import { changeCityAction } from '../../store/cityProcess.ts';
import { getCity } from '../../store/selectors.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';

function CityList(){
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(getCity);

  return (
    <ul className="locations__list tabs__list" data-testid = 'cityList'>
      {CITIES.map((c)=>(
        <li key = {c.lat} className="locations__item">
          <Link to = "/" className={c.title === cityName ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            onClick = {()=>{
              dispatch(changeCityAction((c.title)));
            }}
          >
            <span>{c.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CityList;
