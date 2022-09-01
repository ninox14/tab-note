import { FC } from 'react'
import { Twemoji } from '../../components/twemoji'
import { Category } from '../../models/categories'
import { trpc } from '../../utils/trpc'

export const Categories = () => {
  return (
    <div className="w-1/4">
      <Header />
      <CategoriesList />
    </div>
  )
}

const Header = () => {
  return <div className="min-h-[80px] bg-mainGrey border-black border-r-2 border-b-2">header</div>
}

const CategoriesList = () => {
  const { data: categories } = trpc.useQuery(['categories.getCategories'])

  if (!categories) {
    return <div>No categories</div>
  }

  return (
    <>
      {categories.map((category) => (
        <Category key={category.name} item={category} />
      ))}
    </>
  )
}

interface CategoryProps {
  item: Category
}

const Category: FC<CategoryProps> = ({ item }) => {
  const { name, color, icon, textColor } = item
  return (
    <label className="flex" style={{ backgroundColor: color, color: textColor }}>
      <p>{name}</p>
      <Twemoji width={38} height={38} emoji={icon} />
    </label>
  )
}
