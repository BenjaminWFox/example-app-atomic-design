import SidebarNavigation from '../../components/organisms/sidebar-navigation'
import Button from '../atoms/button'

export default function ListSidebar({category, name, description, sidenav}) {
  const handleClick = () => {
    alert('Add List Functionality not implemented!')
  }

  return (
    <SidebarNavigation selected={category} title={name} subtitle={description} sidenav={sidenav}>
      <Button onClick={handleClick} label="Add List" />
    </SidebarNavigation>
  )
}