import TemplateSidebarContent from '../templates/template-sidebar-content'
import UserHeader from '../organisms/user-header'
import SidebarNavigation from '../organisms/sidebar-navigation'
import ListDetails from '../organisms/list-details'

export default function List({category, categories, list, lists, sidenav}) {
  return <TemplateSidebarContent
    header={<UserHeader />}
    sidebar={<SidebarNavigation selected={list.name} title={category.name} subtitle={category.description} sidenav={sidenav} />}
    content={<ListDetails list={list} />}
  />
}
