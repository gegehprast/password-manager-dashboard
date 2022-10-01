import { signOut } from 'next-auth/react'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Sidebar from './Sidebar'

interface Props {
    children: ReactElement
}

const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title>Password Manager asdsadsda</title>

                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <main className="relative w-full h-screen overflow-hidden">
                <header className="relative h-[4rem] px-4  text-white bg-pink-500 shadow-md z-10 flex items-center flex-row flex-nowrap">
                    <h1 className="text-xl lg:text-3xl">Password Manager</h1>

                    <div className="ml-auto">
                        <a
                            href="#"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </a>
                    </div>
                </header>

                <div className="flex w-full h-full max-h-[calc(100%-4rem)]">
                    {/* sidebar */}
                    <div className="lg:w-[12%] h-full py-6 overflow-y-auto text-white bg-pink-500 hidden lg:block">
                        <Sidebar />
                    </div>

                    {/* content */}
                    <div className="w-full lg:w-[88%] h-full p-2 lg:p-6 overflow-y-auto ">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainLayout
