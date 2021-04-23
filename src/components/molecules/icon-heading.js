import styles from './icon-heading.module.css'
import Icon from '../atoms/icon'

export default function IconHeading({title, subtitle}) {
  return (
    <div className={styles.iconHeading}>
      <Icon src="/icons/person.svg" name="Personal" size="md" />
      <div className={styles.text}>
        <strong>{title}</strong>
        <em>{subtitle}</em>
      </div>
    </div>
  )
}