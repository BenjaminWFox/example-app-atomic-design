import styles from './templates.module.css'

export default function TemplateContentFullwidth({ header, content }) {
  return (
    <>
      <header className={styles.header}>
        {header}
      </header>
      <section className={[styles.content, styles.centeredColumn].join(' ')}>
        <main className={[styles.main, styles.bordered].join(' ')}>
          {content}
        </main>
      </section>
    </>
  )
}