import CategoryPage from '../../../components/pages/category'

export default function Category(props) { return <CategoryPage {...props} /> }

export async function getServerSideProps(ctx) {
  const request = await fetch(`${process.env.SITE_ROOT}/data/content.json`, {method: 'GET'})
  const data = await request.json()
  const categories = data.Categories
  const sidenav = []
  let category = null

  categories.forEach(c => {
    sidenav.push({
      name: c.name,
      href: `/category/${c.name}`
    })
    if (c.name === ctx.query.category) {
      category = c
    }
  })

  return {
    props: {
      name: 'Categories',
      description: 'All Categories',
      sidenav,
      categories,
      category
    }
  }
}