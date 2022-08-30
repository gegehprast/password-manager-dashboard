import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Password Manager</title>

                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <h1 className="text-6xl font-bold">Password Manager</h1>

                <div className='mt-10'>
                    <Button />
                </div>
            </main>
        </div>
    )
}

const Button = () => {
    const { data: session } = useSession()
    
    if (session && session.user) {
        console.log(session)
        return (
            <>
                <button
                    className="px-2 py-1 mr-2 text-white bg-blue-600 rounded hover:bg-blue-500"
                    onClick={() => signOut()}
                >
                    Dashboard
                </button>

                <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-100"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </>
        )
    }
    
    return (
        <>
            <button
                className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-500"
                onClick={() => signIn()}
            >
                Sign in
            </button>
        </>
    )
}

export default Home

