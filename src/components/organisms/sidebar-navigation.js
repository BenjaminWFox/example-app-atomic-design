import VerticalListLayout from '../molecules/vertical-list-layout'
import BlockLink from '../atoms/block-link'
import IconHeading from '../molecules/icon-heading'

export default function SidebarNavigation({ title, subtitle, sidenav, selected, children }) {
  return (<div className="organism">
    <IconHeading title={title} subtitle={subtitle} />
    <VerticalListLayout>
      {sidenav.map(entry => {
        const label = selected === entry.name ? `> ${entry.name}` : entry.name

        return <BlockLink key={entry.href} href={entry.href}>{label}</BlockLink>
      })}
    </VerticalListLayout>
    {children}
  </div>)
}