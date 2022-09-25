import { inferQueryOutput } from '../utils/trpc'

export type NoteFromServer = inferQueryOutput<'notes.getAll'>[0]
