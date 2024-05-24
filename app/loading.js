import Spinner from 'components/Spinner';
import styles from 'styles/Cocktails.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <Spinner />
    </div>
  );
};

export default Loading;
