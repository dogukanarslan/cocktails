'use client';

import { useState } from 'react';
import { Button } from 'components/Button';
import { Drinks } from 'components/Drinks';
import { Input } from 'components/Input';

import styles from 'styles/Search.module.css';

const SearchPage = () => {
  const [name, setName] = useState('');
  const [drinks, setDrinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await (await fetch(`/api/search?s=${name}`)).json();
    setDrinks(data.drinks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Drink name"
        />
        <Button>Search</Button>
      </form>

      <Drinks drinks={drinks} />
    </div>
  );
};

export default SearchPage;
