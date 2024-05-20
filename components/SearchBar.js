'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from 'components/Button';

const SearchBar = (props) => {
  const { categories, glasses, alcoholicOptions, ingredients } = props;

  const router = useRouter();
  const params = useParams();

  const [searchBy, setSearchBy] = useState(params.filter);
  const [option, setOption] = useState(decodeURI(params.option));

  const changeFilter = (filter) => {
    setSearchBy(filter);
    setOption('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/${searchBy}/${option}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="searchBy">Search by</label>
        <select
          id="searchBy"
          value={searchBy}
          required
          onChange={(e) => changeFilter(e.target.value)}
        >
          <option value="category">Category</option>
          <option value="glass">Glass</option>
          <option value="ingredient">Ingredient</option>
          <option value="alcoholic">Alcoholic</option>
        </select>
      </div>

      {searchBy === 'category' && (
        <div>
          <select
            value={option}
            required
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
      )}

      {searchBy === 'glass' && (
        <div>
          <select
            value={option}
            required
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">Select a glass</option>
            {glasses.map((glass) => (
              <option key={glass.strGlass} value={glass.strGlass}>
                {glass.strGlass}
              </option>
            ))}
          </select>
        </div>
      )}

      {searchBy === 'alcoholic' && (
        <div>
          <select
            value={option}
            required
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">Select alcoholic option</option>
            {alcoholicOptions.map((option) => (
              <option key={option.strAlcoholic} value={option.strAlcoholic}>
                {option.strAlcoholic}
              </option>
            ))}
          </select>
        </div>
      )}

      {searchBy === 'ingredient' && (
        <div>
          <select value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="">Select an ingredient</option>
            {ingredients.map((option) => (
              <option key={option.strIngredient1} value={option.strIngredient1}>
                {option.strIngredient1}
              </option>
            ))}
          </select>
        </div>
      )}
      <Button>Fetch</Button>
    </form>
  );
};

export default SearchBar;
