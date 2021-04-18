import TemplateContentFullWidth from '../templates/template-content-full-width'
import UserHeader from '../../components/organisms/user-header'
import IndexContent from '../../components/organisms/index-content'

export default function Index({content, children}) {
  return <TemplateContentFullWidth
    header={<UserHeader />}
    content={<IndexContent />}
  />
}
