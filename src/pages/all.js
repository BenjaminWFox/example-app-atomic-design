import All from '../components/pages/all'

export default function AllPage(props) { return <All {...props} /> }

export async function getServerSideProps() {
  const request = await fetch(`${process.env.SITE_ROOT}/data/content.json`, {method: 'GET'})
  const data = await request.json()
  const categories = data.Categories

  return {
    props: {
      categories,
    }
  }
}