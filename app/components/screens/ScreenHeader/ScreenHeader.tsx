'use client';
import { useRouter } from 'next/navigation';
import BackIcon from '../../icons/BackIcon';
import LogoIcon from '../../icons/LogoIcon';
import styles from './ScreenHeader.module.css';
import classNames from 'classnames';
import Link from 'next/link';

export default function ScreenHeader({
  inverseColors,
}: {
  inverseColors?: boolean;
}) {
  const router = useRouter();

  return (
    <header
      className={classNames(styles.header, inverseColors && styles.inverse)}
    >
      <button
        onClick={() => router.back()}
        title="back"
        className={styles.back}
      >
        <BackIcon />
      </button>
      <Link className={styles.logoContainer} href={'/'}>
        <LogoIcon />
      </Link>
    </header>
  );
}
