import styles from './user-avatar.module.css'
import Link from 'next/link'

export default function UserAvatar({size, type, display}) {
  const sizes = {
    'xs': .5,
    'sm': 1,
    'md': 2,
    'lg': 3,
    'xl': 4,
  }

  return (
    <Link href="/profile"><a><div
    style={{ padding: `var(--spacing-${size})` }}
    className={styles.userAvatar}>
      BF
    </div></a></Link>
  )
}