import { inferQueryOutput } from '../utils/trpc'

export type CategoryFromServer = inferQueryOutput<'categories.getAll'>[0]
