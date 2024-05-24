'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from 'components/Button';
import Select from 'components/Select';

import styles from 'styles/SearchBar.module.css';
import { DEFAULT_FILTER, DEFAULT_OPTION } from 'app/page';

const SearchBar = (props) => {
  const { categories, glasses, alcoholicOptions, ingredients } = props;

  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchBy, setSearchBy] = useState(
    searchParams.get('filter') || DEFAULT_FILTER
  );
  const [option, setOption] = useState(
    searchParams.get('option')
      ? decodeURI(searchParams.get('option'))
      : DEFAULT_OPTION
  );

  const changeFilter = (filter) => {
    setSearchBy(filter);
    setOption('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/?filter=${searchBy}&option=${option}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <Select
          id="searchBy"
          value={searchBy}
          required
          onChange={(e) => changeFilter(e.target.value)}
        >
          <option value="category">Category</option>
          <option value="glass">Glass</option>
          <option value="ingredient">Ingredient</option>
          <option value="alcoholic">Alcoholic</option>
        </Select>

        {searchBy === 'category' && (
          <Select
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
          </Select>
        )}

        {searchBy === 'glass' && (
          <Select
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
          </Select>
        )}

        {searchBy === 'alcoholic' && (
          <Select
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
          </Select>
        )}

        {searchBy === 'ingredient' && (
          <Select value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="">Select an ingredient</option>
            {ingredients.map((option) => (
              <option key={option.strIngredient1} value={option.strIngredient1}>
                {option.strIngredient1}
              </option>
            ))}
          </Select>
        )}
      </div>
      <Button>Fetch</Button>
    </form>
  );
};

export default SearchBar;
