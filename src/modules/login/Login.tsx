import { signIn } from 'next-auth/react'

export const Login = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[400px] bg-neutral-700 h-fit p-2 flex flex-col items-center rounded gap-3">
        <h2 className="text-2xl font-bold text-white">Login</h2>
        <button
          className="min-w-[300px] bg-indigo-900 hover:bg-indigo-700
          text-white font-bold py-2 px-4 rounded"
          onClick={() => signIn('discord')}
        >
          Discord
        </button>
      </div>
    </div>
  )
}
