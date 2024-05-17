import Link from 'next/link';
import Image from 'next/image';

import SearchBar from 'components/SearchBar';

import styles from 'styles/Cocktails.module.css';

const getData = async () => {
  const res = await fetch('https://the-cocktail-db3.p.rapidapi.com/', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.API_HOST,
      'x-rapidapi-key': process.env.API_KEY
    }
  });

  return res.json();
};

const CocktailsPage = async () => {
  const drinks = await getData();

  return (
    <>
      <SearchBar />
      <div className={styles.drinks}>
        {drinks?.map((drink) => {
          return (
            <div className={styles.card} key={drink.id}>
              <Image
                src={drink.image}
                alt="Drink image"
                width={200}
                height={200}
              />
              <div>
                <p>{drink.title}</p>
                <div>
                  <span className={styles.badge}>{drink.difficulty}</span>
                </div>
                <Link href={drink.id}>View</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CocktailsPage;
