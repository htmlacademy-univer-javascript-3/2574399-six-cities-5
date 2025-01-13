import React from 'react';

type SortOption = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

type SortOptionsProps = {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
};

const SortOptions: React.FC<SortOptionsProps> = ({ currentSort, onSortChange }) => {
  const options: SortOption[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {options.map((option) => (
          <li
            key={option}
            className={`places__option ${currentSort === option ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SortOptions;
