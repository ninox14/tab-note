import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { Categories } from '../modules/categories'
import { NoteBoard } from '../modules/noteboard'

const App = () => {
  return (
    <div className="container min-h-screen mx-auto bg-neutral-500 flex text-white">
      <Categories />
      <NoteBoard />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default App
