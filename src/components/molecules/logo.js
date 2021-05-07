import styles from './logo.module.css'
import Icon from '../atoms/icon'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="molecule"><a>
      <div className={styles.logo}>
        <Icon src="/icons/home.svg" name="Home" size="xs" variant="invert" />
        {' '}
        RAIJ
      </div>
    </a></Link>
  )
}