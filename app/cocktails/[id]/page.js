import Image from 'next/image';
import { BASE_URL } from '../../../constants';
import styles from 'styles/CocktailDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

  return res.json();
};

const CocktailDetail = async (props) => {
  const {
    params: { id }
  } = props;

  const { drinks } = await getData(id);
  const drink = drinks[0];

  return (
    <div className={styles.wrapper}>
      <Image
        src={drink.strDrinkThumb}
        width="150"
        height="150"
        alt="Cocktail image"
        className={styles.image}
      />

      <div>
        <h1 className={styles.heading}>Name</h1>
        <p>{drink.strDrink}</p>
      </div>

      <div className={styles.info}>
        <h1 className={styles.heading}>Glass</h1>
        <p>{drink.strGlass}</p>
      </div>

      <div className={styles.info}>
        <h1 className={styles.heading}>Instruction</h1>
        <p>{drink.strInstructions || '-'}</p>
      </div>
    </div>
  );
};

export default CocktailDetail;
