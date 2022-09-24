import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useSession, signIn } from 'next-auth/react'
import Dashboard from '../views/Dashboard'
import { Session, unstable_getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { MyNextPage } from './_app'
import MainLayout from '../components/MainLayout'

interface HomeProps {
    session: Session
}

const Home: MyNextPage<HomeProps> = ({ session }) => {
    if (session && session.user) {
        return <Dashboard />
    }

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

                <div className="mt-10">
                    <button
                        className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-500"
                        onClick={() => signIn()}
                    >
                        Sign in
                    </button>
                </div>
            </main>
        </div>
    )
}

Home.getLayout = (page) => {
    const session = page.props.session

    if (session && session.user) {
        return <MainLayout>{page}</MainLayout>
    }

    return <>{page}</>
}

export const getServerSideProps: GetServerSideProps = async context => {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    )

    return {
        props: {
            session,
        },
    }
}

export default Home
