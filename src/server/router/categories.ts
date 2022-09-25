import categories from '../../mocks/categories'
import { createProtectedRouter } from './protected-router'

export const categoriesRouter = createProtectedRouter().query('getAll', {
  resolve() {
    return categories
  },
})
