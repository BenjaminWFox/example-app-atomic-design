import SidebarLinkList from '../molecules/sidebar-link-list'
import TextLink from '../atoms/block-link'
import SidebarTitle from '../molecules/sidebar-title'

export default function SidebarNavigation({ title, subtitle, sidenav, selected, children }) {
  const handleAddNew = () => {
    alert('This functionality is not implemented!')
  }
  return (<>
    <SidebarTitle title={title} subtitle={subtitle} />
    <SidebarLinkList>
      {sidenav.map(entry => {
        const label = selected === entry.name ? `> ${entry.name}` : entry.name

        return <TextLink key={entry.href} href={entry.href}>{label}</TextLink>
      })}
    </SidebarLinkList>
    {children}
  </>)
}