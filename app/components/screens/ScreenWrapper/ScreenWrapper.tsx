import styles from './ScreenWrapper.module.css';

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.wrapper}>{children}</div>;
}
