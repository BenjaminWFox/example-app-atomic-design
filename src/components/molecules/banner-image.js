import Image from 'next/image'
import styles from './banner-image.module.css'

export default function BannerImage({ src, title, subtitle, height }) {
  return (
    <div
      style={{height}}
      className={[styles.banner, 'flush-width', 'flush-top'].join(' ')}>
      <div className={styles.caption}>
        {title ? <h1>{title}</h1> : null}
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
    </div>
  )
}