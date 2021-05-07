import styles from './header-link-list.module.css'

export default function HeaderLinkList({children}) {
  return <div className={[styles.headerLinkList, 'molecule'].join(' ')}>{children}</div>
}