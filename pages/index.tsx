import type { NextPage } from 'next'
import Head from 'next/head'

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
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                Password Manager
            </footer>
        </div>
    )
}

export default Home
