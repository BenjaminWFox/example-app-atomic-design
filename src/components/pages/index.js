import TemplateContentCenteredColumn from '../templates/template-content-centered-column'
import UserHeader from '../../components/organisms/user-header'
import Welcome from '../../components/organisms/welcome'

export default function Category({content, children}) {
  return <TemplateContentCenteredColumn
    header={<UserHeader />}
    content={<Welcome />}
  />
}
