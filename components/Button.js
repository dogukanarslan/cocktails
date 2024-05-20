import Link from 'next/link';
import styles from 'styles/Button.module.css';

export const Button = (props) => {
  let { tag: Tag = 'button', ...attributes } = props;

  if (attributes.href) {
    Tag = Link;
  }

  return (
    <Tag
      type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
      {...attributes}
      className={styles.btn}
    />
  );
};
