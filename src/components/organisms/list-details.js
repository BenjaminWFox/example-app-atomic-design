import ImageWithOverlay from '../atoms/image-with-overlay'
import Button from '../atoms/button'

function renderAllSubEntries(list) {
  if (list && list.entries?.length) {
    return <ul>
      {list.entries.map(entry => <li key={entry.name}>
      {entry.name}
        {renderAllSubEntries(entry)}
      </li>)}
    </ul>
  }

return null
}

export default function ListDetails({ list }) {
  const { name, description, entries } = list

  const handleClick = () => {
    alert('Add List Item Functionality not implemented!')
  }

  return (<div className="organism">
    <div style={{position: 'relative'}}><ImageWithOverlay title={name} src="https://picsum.photos/1000/200/?blur=2" /></div>
    <em>{description}</em>
    <br /><br /><br />
    {entries && entries.length ? <>
      <h3>Lists in Category:</h3>
      {renderAllSubEntries(list)}
    </>
      : <h3>No lists for this category!</h3>}
      <Button onClick={handleClick} label="Add List Item" />
  </div>)
}