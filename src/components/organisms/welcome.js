import Image from 'next/image'
import styles from './welcome.module.css'

export default function Welcome({ content, children }) {
  return <>
    {/* <h1>Welcome to RAIJ!</h1> */}
    <div
      className={[styles.banner, 'flush-width', 'flush-top'].join(' ')}>
      <div className={styles.caption}>
        <h1>Welcome to RAIJ</h1>
        <p>Make Lists. Soothe the Rage.</p>
      </div>
      <Image
        src="/pano.webp"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
    </div>
  </>
}
