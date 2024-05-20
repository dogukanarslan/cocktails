import styles from 'styles/Select.module.css';

const Select = (props) => {
  return <select {...props} className={styles.select} />;
};

export default Select;
