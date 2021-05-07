import BlockLink from '../atoms/block-link'

export default function CategoryDetails({ category }) {
  const { name, description, lists } = category
  return (<div className="organism">
    <h2>{name}</h2>
    <em>{description}</em>
    <br /><br /><br />
    {lists && lists.length ? <>
      <h3>Lists in Category:</h3>
      <ul>
        {lists.map(list => <li key={list.name}><BlockLink href={`${name}/list/${list.name}`}>{list.name}</BlockLink></li>)}
      </ul>
    </>
      : <h3>No lists for this category!</h3>}
  </div>)
}