import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utility from '../styles/Utility.module.css'
import Icon from '../components/atoms/icon'
import UserAvatar from '../components/atoms/user-avatar'
import Logo from '../components/molecules/logo'
import Link from 'next/link'
import HeaderLinkList from '../components/molecules/header-link-list'
import HeaderIconsGroup from '../components/molecules/header-icons-group'
import TextLink from '../components/atoms/text-link'
import SidebarTitle from '../components/molecules/sidebar-title'

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
            <TextLink href="/">Projects</TextLink>
            <TextLink href="/">Lists</TextLink>
            <TextLink href="/">Other</TextLink>
          </HeaderLinkList>
        </div>
        <HeaderIconsGroup>
          <Link href="/settings"><a><Icon src="/icons/settings.svg" name="Settings" size="sm" /></a></Link>
          <UserAvatar size="sm" />
        </HeaderIconsGroup>
      </header>
      <section className={styles.content}>
        <aside className={styles.sidebar}>
          <SidebarTitle />
        </aside>
        <main className={styles.main}>

        </main>
      </section>
    </div>
  )
}
