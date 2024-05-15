import Image from 'next/image';

import styles from 'styles/CocktailDetail.module.css';

const getData = async (id) => {
  const res = await fetch(
    `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`,
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

const CocktailDetail = async (props) => {
  const {
    params: { id }
  } = props;

  const cocktail = await getData(id);
  const drink = cocktail.drinks[0];

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
        <span className={styles.badge}>{drink.strAlcoholic}</span>
      </div>

      <div>
        <h1 className={styles.heading}>Name</h1>
        <p>{drink.strDrink}</p>
      </div>

      <div className={styles.info}>
        <h1 className={styles.heading}>Category</h1>
        <p>{drink.strCategory}</p>
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
