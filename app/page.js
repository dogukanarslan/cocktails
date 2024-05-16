import Link from 'next/link';
import Image from 'next/image';
import SearchBar from 'components/SearchBar';

import styles from 'styles/Cocktails.module.css';

const getData = async () => {
  const res = await fetch(
    `https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary Drink`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.API_HOST,
        'x-rapidapi-key': process.env.API_KEY
      }
    }
  );

  return res.json();
};

const CocktailsPage = async () => {
  const { drinks } = await getData();

  return (
    <>
      <SearchBar />
      <div className={styles.drinks}>
        {drinks.map((item) => {
          return (
            <div className={styles.card} key={item.idDrink}>
              <Image
                src={item.strDrinkThumb}
                alt="Drink image"
                width={200}
                height={200}
              />
              <div>
                <p>{item.strDrink}</p>
                <Link href={item.idDrink}>More Info</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CocktailsPage;
