import TemplateSidebarContent from '../templates/template-sidebar-content'
import UserHeader from '../../components/organisms/user-header'
import SidebarNavigation from '../../components/organisms/sidebar-navigation'
import CategoryDetails from '../../components/organisms/category-details'

export default function Category({name, description, category, categories, sidenav}) {
  return <TemplateSidebarContent
    header={<UserHeader />}
    sidebar={<SidebarNavigation title={name} subtitle={description} sidenav={sidenav} />}
    content={<CategoryDetails category={category} />}
  />
}
