import BannerImage from '../molecules/banner-image'
import TextLink from '../atoms/text-link'

export default function AllListsContent({categories}) {
  return (<>
    <BannerImage
      height="300px"
      src="/leaves.webp"
      title="All Lists"
    />
    <div style={{ padding: 'var(--spacing-xl) var(--spacing-lg)'}}>
      {categories.map(category => {
        return (
          <div>
            {category.name}
            <ul>
              {category.lists.map(list => (
                <li>
                  <TextLink href={`/category/${category.name}/list/${list.name}`}>{list.name}</TextLink>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  </>
  )
}