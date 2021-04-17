import SidebarLinkList from '../molecules/sidebar-link-list'
import TextLink from '../atoms/text-link'
import SidebarTitle from '../molecules/sidebar-title'

export default function SidebarNavigation({ title, subtitle, sidenav }) {
  return (<>
    <SidebarTitle title={title} subtitle={subtitle} />
    <SidebarLinkList>
      {sidenav.map(entry => <TextLink key={entry.href} href={entry.href}>{entry.name}</TextLink>)}
      <TextLink href="/"><button role="button">+ Add New Category</button></TextLink>
    </SidebarLinkList>
  </>)
}