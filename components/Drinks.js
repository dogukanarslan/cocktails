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
            <Image
              src={drink.strDrinkThumb}
              alt="Drink image"
              width={200}
              height={200}
            />
            <div>
              <p>{drink.strDrink}</p>
              <Button href={`/cocktails/${drink.idDrink}`}>View</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
