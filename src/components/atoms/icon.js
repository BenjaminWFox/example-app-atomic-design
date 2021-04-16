import styles from './icon.module.css'

export default function Icon({name, src, size, variant}) {
  return <img className={[styles.base, styles[size], styles[variant]].join(' ')} src={src} alt={`${name} icon.`} />
}