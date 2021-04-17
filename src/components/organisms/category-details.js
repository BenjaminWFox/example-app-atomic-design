export default function CategoryDetails({ category }) {
  const { name, description, lists } = category
  return (<>
    <h2>{name}</h2>
    <em>{description}</em>
    <br /><br /><br />
    {lists && lists.length ? <>
      <h3>Lists in Category:</h3>
      <ul>
        {lists.map(list => <li key={list.name}><a href={`${name}/list/${list.name}`}>{list.name}</a></li>)}
      </ul>
    </>
      : <h3>No lists for this category!</h3>}
  </>)
}