import styles from './sidebar-title.module.css'
import Icon from '../atoms/icon'

export default function SidebarTitle({children}) {
  return (
    <div className={styles.sidebar_title}>
      <Icon src="/icons/person.svg" name="Personal" size="md" />
      <div className={styles.text}>
        <strong>Personal Stuff</strong>
        <em>List Collection</em>
      </div>
    </div>
)
}