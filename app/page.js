import { BASE_URL } from '../constants';
import { Drinks } from 'components/Drinks';
import SearchBar from 'components/SearchBar';

import styles from 'styles/Cocktails.module.css';

export const FILTERS = {
  alcoholic: 'a',
  category: 'c',
  glass: 'g',
  ingredient: 'i'
};

export const DEFAULT_FILTER = 'category';
export const DEFAULT_OPTION = 'Beer';

const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/list.php?c=list`);

  return res.json();
};

const getGlasses = async () => {
  const res = await fetch(`${BASE_URL}/list.php?g=list`);

  return res.json();
};

const getAlcoholic = async () => {
  const res = await fetch(`${BASE_URL}/list.php?a=list`);
  return res.json();
};

const getIngredients = async () => {
  const res = await fetch(`${BASE_URL}/list.php?i=list`);

  return res.json();
};

const getDrinks = async (filter = DEFAULT_FILTER, option = DEFAULT_OPTION) => {
  const res = await fetch(
    `${BASE_URL}/filter.php?${FILTERS[filter]}=${option}`
  );
  return res.json();
};

const CocktailsPage = async (props) => {
  const { searchParams } = props;
  const { filter, option } = searchParams;

  const categoriesData = getCategories();
  const alcoholicData = getAlcoholic();
  const glassesData = getGlasses();
  const ingredientsData = getIngredients();

  const [categories, alcoholicOptions, glasses, ingredients] =
    await Promise.all([
      categoriesData,
      alcoholicData,
      glassesData,
      ingredientsData
    ]);

  const { drinks } = await getDrinks(filter, option);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <SearchBar
          categories={categories.drinks}
          glasses={glasses.drinks}
          alcoholicOptions={alcoholicOptions.drinks}
          ingredients={ingredients.drinks}
        />
      </div>
      <h1 className={styles.heading}>Total Drinks: {drinks.length}</h1>
      <div className={styles.drinksWrapper}>
        <Drinks drinks={drinks} />
      </div>
    </div>
  );
};

export default CocktailsPage;
