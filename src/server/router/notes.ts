import { createProtectedRouter } from './protected-router'
import { z } from 'zod'

export const notesRouter = createProtectedRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.note.findMany({ where: { userId: ctx.session.user.id } })
    },
  })
  // TODO: at least one of fields
  // https://stackoverflow.com/questions/73281501/at-least-one-minimum-one-field-in-zod-schema-validation
  .mutation('createNote', {
    input: z.object({
      textContent: z.string(),
    }),
    async resolve({ ctx, input }) {
      return ctx.prisma.note.create({ data: { userId: ctx.session.user.id, content: input.textContent } })
    },
  })
