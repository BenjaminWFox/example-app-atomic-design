import BannerImage from '../molecules/banner-image'
import { ADDisplayContext } from '../../data/context'

export default function SettingsContent() {
  return <div className="organism">
    <BannerImage
    height="300px"
    src="/pepper.webp"
    title="Settings"
    />
    <h3>Toggle component visualization:</h3>
    <ul>
      <ADDisplayContext.Consumer>
        {({display, updateDisplay}) => (Object.entries(display).map(([key, value], i) => {
          return (<li key={key}><input id={key} type="checkbox" checked={!value} onChange={() => updateDisplay(key, !value)} /><label htmlFor={key}>{key}</label></li>)
        }))}
      </ADDisplayContext.Consumer>
    </ul>
  </div>
}