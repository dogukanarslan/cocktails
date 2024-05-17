'use client';

import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortType, setSortType] = useState('name');

  return (
    <form>
      <div>
        <label htmlFor="search">Drink Name</label>
        <input
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          onChange={(e) => setSortType(e.target.value)}
          value={sortType}
        >
          <option value="name">Name</option>
          <option value="difficulty">Difficulty</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
