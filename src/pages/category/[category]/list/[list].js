import ListPage from '../../../../components/pages/list'

export default function List(props) { return <ListPage {...props} /> }

export async function getServerSideProps(ctx) {
  const request = await fetch(`${process.env.SITE_ROOT}/data/content.json`, {method: 'GET'})
  const data = await request.json()
  const categories = data.Categories
  const sidenav = []
  let category = null
  let list = null

  console.log('Context', ctx)

  categories.forEach(c => {
    if (c.name === ctx.query.category) {
      category = c
      list = c.lists
      
      c.lists.forEach(l => {
        if (l.name === ctx.query.list) {
          list = l
        }

        sidenav.push({
          name: l.name,
          href: `/category/${c.name}/list/${l.name}`
        })  
      })
    }
  })

  const lists = category.lists

  return {
    props: {
      sidenav,
      categories,
      category,
      lists,
      list,
    }
  }
}