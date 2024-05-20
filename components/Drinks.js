import Link from 'next/link';
import Image from 'next/image';

import styles from 'styles/Drinks.module.css';

export const Drinks = (props) => {
  const { drinks } = props;

  return (
    <div className={styles.drinks}>
      {drinks?.map((drink) => {
        return (
          <div className={styles.card} key={drink.idDrink}>
            <Image
              src={drink.strDrinkThumb}
              alt="Drink image"
              width={200}
              height={200}
            />
            <div>
              <p>{drink.strDrink}</p>
              <Link href={`/cocktails/${drink.idDrink}`}>View</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
