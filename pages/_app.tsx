import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout'
import { ReactElement } from 'react'

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
