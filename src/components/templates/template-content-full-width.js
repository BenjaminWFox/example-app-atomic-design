import styles from './templates.module.css'

export default function TemplateContentFullWidth({ header, content }) {
  return (
    <div className="template">
      <header className={styles.header}>
        {header}
      </header>
      <section className={styles.content}>
        <main className={styles.main}>
          {content}
        </main>
      </section>
    </div>
  )
}