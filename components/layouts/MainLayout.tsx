import Head from 'next/head'
import React, { ReactElement } from 'react'

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

            <div>{children}</div>
        </>
    )
}

export default MainLayout
