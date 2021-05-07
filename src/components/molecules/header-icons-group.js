import styles from './header-icons-group.module.css'

export default function HeaderIconsGroup({children}) {
  return (
    <div className={[styles.base, 'horizontal', 'molecule'].join(' ')}>{children}</div>
  )
}