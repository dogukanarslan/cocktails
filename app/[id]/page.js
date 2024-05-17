import Image from 'next/image';

import styles from 'styles/CocktailDetail.module.css';

const getData = async (id) => {
  const res = await fetch(`https://the-cocktail-db3.p.rapidapi.com/${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.API_HOST,
      'x-rapidapi-key': process.env.API_KEY
    }
  });

  return res.json();
};

const CocktailDetail = async (props) => {
  const {
    params: { id }
  } = props;

  const drink = await getData(id);

  return (
    <div className={styles.wrapper}>
      <Image
        src={drink.image}
        width="150"
        height="150"
        alt="Cocktail image"
        className={styles.image}
      />
      <div>
        <span className={styles.badge}>{drink.difficulty}</span>
      </div>

      <div>
        <h1 className={styles.heading}>Name</h1>
        <p>{drink.title}</p>
      </div>

      <div className={styles.info}>
        <h1 className={styles.heading}>Time</h1>
        <p>{drink.time}</p>
      </div>

      <div className={styles.info}>
        <h1 className={styles.heading}>Portion</h1>
        <p>{drink.portion}</p>
      </div>

      <div className={styles.info}>
        <h1 className={styles.heading}>Instruction</h1>
        <p>{drink.description || '-'}</p>
      </div>
    </div>
  );
};

export default CocktailDetail;
