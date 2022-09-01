import { createRouter } from './context'
import categories from '../../mocks/categories'

export const categoriesRouter = createRouter().query('getCategories', {
  resolve() {
    return categories
  },
})
