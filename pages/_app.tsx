import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import MainLayout from '../components/MainLayout'
import { ReactElement } from 'react'
import '../styles/globals.css'

export type MyNextPage<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement<P>) => ReactElement
}

type ComponentProps = AppProps & {
    Component?: MyNextPage
}

function MyApp({
    Component,
    pageProps,
}: ComponentProps) {
    const getLayout =
        Component.getLayout ||
        ((page: ReactElement) => <MainLayout>{page}</MainLayout>)

    return getLayout(
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
