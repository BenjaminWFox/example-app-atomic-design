import TemplateContentCenteredColumn from '../templates/template-content-centered-column'
import ProfileContent from '../organisms/profile-content'
import UserHeader from '../organisms/user-header'

export default function Settings() {
  return <TemplateContentCenteredColumn
    header={<UserHeader />}
    content={<ProfileContent />}
  />
}