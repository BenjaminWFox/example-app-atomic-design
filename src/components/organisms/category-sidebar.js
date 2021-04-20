import SidebarNavigation from '../../components/organisms/sidebar-navigation'
import Button from '../atoms/button'

export default function CategorySidebar({category, name, description, sidenav}) {
  const handleClick = () => {
    alert('Add Category Functionality not implemented!')
  }

  return (
    <SidebarNavigation selected={category.name} title={name} subtitle={description} sidenav={sidenav}>
      <Button onClick={handleClick} label="Add Category" />
    </SidebarNavigation>
  )
}