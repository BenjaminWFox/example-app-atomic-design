import styles from './logo.module.css'
import Icon from './icon'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Icon src="/icons/home.svg" name="Home" size="xs" variant="invert" />
      {' '}
      RAIJ
    </div>
  )
}