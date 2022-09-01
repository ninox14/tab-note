import { Categories } from '../modules/categories'

const App = () => {
  return (
    <div className="container min-h-screen mx-auto bg-neutral-500 flex">
      <Categories />
      <div className="w-full bg-slate-200">main side</div>
    </div>
  )
}

export default App
