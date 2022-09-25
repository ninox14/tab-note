import { FC } from 'react'

interface Props extends React.HTMLProps<HTMLInputElement> {
  mainColor: string
  accent?: string
}

export const RadioButton: FC<Props> = ({ className, mainColor, ...props }) => {
  return (
    <label
      className={`relative h-6 w-6 border-2 rounded-full cursor-pointer ${className}`}
      style={{ borderColor: mainColor }}
    >
      <input type="checkbox" className="hidden peer" {...props} />
      <span
        className="block h-2 w-2 transition-multiple ease-in rounded-full peer-checked:!bg-accent peer-checked:h-4 peer-checked:w-4 group-hover:h-3 group-hover:w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: mainColor }}
      />
    </label>
  )
}
