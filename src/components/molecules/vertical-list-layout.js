import styles from './vertical-list-layout.module.css'

export default function VerticalListLayout({children}) {
  return <div className={styles.verticalListLayout}>{children}</div>
}