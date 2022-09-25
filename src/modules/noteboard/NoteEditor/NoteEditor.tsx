import { useRef } from 'react'
import { trpc } from '../../../utils/trpc'

export const NoteEditor = () => {
  const texAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const createNoteMutation = trpc.useMutation('notes.createNote')

  const handleAddNote = () => {
    if (!texAreaRef.current || !texAreaRef.current.value) {
      return
    }

    createNoteMutation.mutate({ textContent: texAreaRef.current.value })
  }

  return (
    <div className="flex justify-center">
      <div className="bg-mainGrey p-3 rounded max-w-[700px] flex w-full items-center">
        <textarea
          className="block h-full bg-transparent flex-grow resize-none outline-none text-white"
          ref={texAreaRef}
        />
        <button
          type="submit"
          className="inline-flex justify-center self-end mb-1 p-2 text-accent rounded-full cursor-pointer hover:bg-zinc-900 active:text-white"
          onClick={handleAddNote}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </div>
  )
}
