import { FC } from 'react'
import { Twemoji } from '../../components/twemoji'
import { RadioButton } from '../../components/ui/radio'
import type { CategoryFromServer } from '../../models/categories'
import { trpc } from '../../utils/trpc'

export const Categories = () => {
  return (
    <div className="w-1/4 bg-mainGrey">
      <Header />
      <CategoriesList />
    </div>
  )
}

const Header = () => {
  return <div className="min-h-[80px] border-black border-r-2 border-b-2">header</div>
}

const CategoriesList = () => {
  const { data: categories } = trpc.useQuery(['categories.getAll'])

  if (!categories) {
    return <div>No categories</div>
  }

  return (
    <div className="flex flex-col p-3 gap-3">
      {categories.map((category) => (
        <Category key={category.name} item={category} />
      ))}
    </div>
  )
}

interface CategoryProps {
  item: CategoryFromServer
}

const Category: FC<CategoryProps> = ({ item }) => {
  const { name, color, icon, textColor } = item

  return (
    <label
      className="flex items-center justify-between group gap-6 p-3 rounded-lg cursor-pointer"
      style={{ backgroundColor: color, color: textColor }}
      htmlFor={color}
    >
      <div className="flex grow items-center justify-between text-lg">
        <p className="font-medium">{name}</p>
        <Twemoji width={38} height={38} emoji={icon} />
      </div>
      <RadioButton mainColor={textColor} id={color} />
    </label>
  )
}
