import Image from 'next/image'
import styles from './banner-image.module.css'
import ImageWithOverlay from '../atoms/image-with-overlay'

export default function BannerImage({ src, title, subtitle, height }) {
  return (
    <div
      style={{height}}
      className={[styles.banner, 'flush-width', 'flush-top', 'molecule'].join(' ')}>
      <ImageWithOverlay title={title} subtitle={subtitle} src={src}/>
    </div>
  )
}