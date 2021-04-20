import TemplateSidebarContent from '../templates/template-sidebar-content'
import UserHeader from '../organisms/user-header'
import ListSidebar from '../organisms/list-sidebar'
import ListDetails from '../organisms/list-details'

export default function List({category, categories, list, lists, sidenav}) {
  return <TemplateSidebarContent
    header={<UserHeader />}
    sidebar={<ListSidebar category={list.name} name={category.name} description={category.description} sidenav={sidenav} />}
    content={<ListDetails list={list} />}
  />
}
