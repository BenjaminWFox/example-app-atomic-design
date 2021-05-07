import BannerImage from '../molecules/banner-image'
import { ADDisplayContext } from '../../data/context'

export default function SettingsContent() {
  return <div className="organism">
    <BannerImage
    height="300px"
    src="/pepper.webp"
    title="Settings"
    />
    <h3>Component Visualization:</h3>
    <p>Toggle any of the below checkboxes to highlight those component types in the color shown. The toggle is stored in Context, so you can click through to any of the other pages.</p>
    <br />
    <ul>
      <ADDisplayContext.Consumer>
        {({display, updateDisplay, colors}) => (Object.entries(display).map(([key, value], i) => {
          return (
            <li key={key}>
              <input id={key} type="checkbox" checked={!value} onChange={() => updateDisplay(key, !value)} />
              <label htmlFor={key}>{key} <span style={{display: 'inline-block', width: '12px', height: '12px', backgroundColor: colors[key]}}></span></label></li>)
        }))}
      </ADDisplayContext.Consumer>
    </ul>
  </div>
}