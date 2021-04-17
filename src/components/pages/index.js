import TemplateContentFullWidth from '../templates/template-content-full-width'
import UserHeader from '../../components/organisms/user-header'
import Welcome from '../../components/organisms/welcome'

export default function Category({content, children}) {
  return <TemplateContentFullWidth
    header={<UserHeader />}
    content={<Welcome />}
  />
}
