import { FC } from 'react'
import { NoteFromServer } from '../../models/notes'
import { trpc } from '../../utils/trpc'
import { NoteEditor } from './NoteEditor'

export const NoteBoard = () => {
  return (
    <div className="w-full flex flex-col bg-noteBg pb-3 ">
      <Header />
      <div className="flex-grow pl-3 pr-3">
        <Notes />
      </div>
      <NoteEditor />
    </div>
  )
}

const Header = () => {
  return <div className="min-h-[80px] bg-mainGrey">header</div>
}

const Notes = () => {
  const { data: notes } = trpc.useQuery(['notes.getAll'])

  if (!notes?.length) {
    return <div>Notes are empty</div>
  }

  return (
    <div className="flex flex-col gap-2">
      {notes.map((note) => (
        <Note item={note} key={note.id} />
      ))}
    </div>
  )
}

interface NoteProps {
  item: NoteFromServer
}

const Note: FC<NoteProps> = ({ item }) => {
  return <div>{item.content}</div>
}
