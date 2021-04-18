import TemplateContentCenteredColumn from '../templates/template-content-centered-column'
import SettingsContent from '../organisms/settings-content'
import UserHeader from '../organisms/user-header'

export default function Settings() {
  return <TemplateContentCenteredColumn
    header={<UserHeader />}
    content={<SettingsContent />}
  />
}