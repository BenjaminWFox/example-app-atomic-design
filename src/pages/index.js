import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utility from '../styles/Utility.module.css'
import Icon from '../components/atoms/icon'
import UserAvatar from '../components/atoms/user-avatar'
import Logo from '../components/atoms/logo'
import Link from 'next/link'
import HeaderLinkList from '../components/molecules/header-link-list'
import HeaderLink from '../components/atoms/header-link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*
        Templates: 
          ContentWithSidebar
          ContentFullWidth
      */}

      <header className={styles.header}>
        <div className="horizontal">
          <Logo />
          <HeaderLinkList>
            <HeaderLink href="/">Projects</HeaderLink>
            <HeaderLink href="/">Lists</HeaderLink>
            <HeaderLink href="/">Other</HeaderLink>
          </HeaderLinkList>
        </div>
        <div className="horizontal">
          <Link href="/settings"><a><Icon src="/icons/settings.svg" name="Settings" size="sm" /></a></Link>
          <UserAvatar size="sm" />
        </div>
      </header>
      <section className={styles.content}>
        <aside className={styles.sidebar}>

        </aside>
        <main className={styles.main}>

        </main>
      </section>
    </div>
  )
}
