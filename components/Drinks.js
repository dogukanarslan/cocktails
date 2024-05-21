import Image from 'next/image';
import { Button } from 'components/Button';
import styles from 'styles/Drinks.module.css';

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
              />
            </div>
            <h3 className={styles.title}>{drink.strDrink}</h3>
            <Button href={`/${drink.idDrink}`}>View</Button>
          </div>
        );
      })}
    </div>
  );
};
