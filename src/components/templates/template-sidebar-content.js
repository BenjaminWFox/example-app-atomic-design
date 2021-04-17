import styles from '../../styles/Home.module.css'

export default function TemplateSidebarContent({ header, sidebar, content }) {
  return (
    <>
      <header className={styles.header}>
        {header}
      </header>
      <section className={styles.content}>
        <aside className={styles.sidebar}>
          {sidebar}
        </aside>
        <main className={styles.main}>
          {content}
        </main>
      </section>
    </>
  )
}