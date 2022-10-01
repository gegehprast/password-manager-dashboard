import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const routes = [
    {
        name: 'Dashboard',
        path: '/',
    },
    {
        name: 'Password',
        path: '/password',
    },
]

const Sidebar = () => {
    const router = useRouter()

    return (
        <ul>
            {routes.map((route, i) => (
                <Link
                    key={i}
                    href={route.path}
                >
                    <a>
                        <li
                            className={`px-4 py-2  ${
                                router.pathname == route.path
                                    ? 'bg-pink-600'
                                    : 'hover:bg-pink-600'
                            }`}
                        >
                            {route.name}
                        </li>
                    </a>
                </Link>
            ))}
        </ul>
    )
}

export default Sidebar
