import styles from '../../styles/Home.module.css'

export default function TemplateContentFullWidth({ header, content }) {
  return (
    <>
      <header className={styles.header}>
        {header}
      </header>
      <section className={styles.content}>
        <main className={styles.main}>
          {content}
        </main>
      </section>
    </>
  )
}