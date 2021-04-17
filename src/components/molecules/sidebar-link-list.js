import styles from './sidebar-link-list.module.css'

export default function SidebarLinkList({children}) {
  return <div className={styles.sidebarLinkList}>{children}</div>
}