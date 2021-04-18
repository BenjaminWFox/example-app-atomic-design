import SidebarLinkList from '../molecules/sidebar-link-list'
import TextLink from '../atoms/text-link'
import SidebarTitle from '../molecules/sidebar-title'

export default function SidebarNavigation({ title, subtitle, sidenav, selected }) {
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
      <button role="button" onClick={handleAddNew}>+ Add New</button>
    </SidebarLinkList>
  </>)
}