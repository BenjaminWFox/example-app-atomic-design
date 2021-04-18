import TemplateContentCenteredColumn from '../templates/template-content-centered-column'
import AllListsContent from '../organisms/all-lists-content'
import UserHeader from '../organisms/user-header'

export default function All({categories}) {
  return <TemplateContentCenteredColumn
    header={<UserHeader />}
    content={<AllListsContent categories={categories} />}
  />
}