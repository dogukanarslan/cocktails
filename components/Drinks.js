import Image from 'next/image';
import { Button } from 'components/Button';
import styles from 'styles/Drinks.module.css';
import Link from 'next/link';

export const Drinks = (props) => {
  const { drinks } = props;

  return (
    <div className={styles.drinks}>
      {drinks?.map((drink) => {
        return (
          <div className={styles.card} key={drink.idDrink}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={drink.strDrinkThumb}
                alt="Drink image"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className={styles.cardBody}>
              <h3>{drink.strDrink}</h3>
              <Link href={`/${drink.idDrink}`}>View</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
