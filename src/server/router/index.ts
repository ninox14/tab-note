// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { exampleRouter } from './example'
import { protectedExampleRouter } from './protected-example-router'
import { categoriesRouter } from './categories'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('categories.', categoriesRouter)
  .merge('auth.', protectedExampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
