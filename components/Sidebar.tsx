import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className="w-[12%] h-full py-6 overflow-y-auto text-white bg-pink-500">
            <ul>
                <Link href="/">
                    <a>
                        <li className="px-4 py-2 hover:bg-pink-600">
                            Dashboard
                        </li>
                    </a>
                </Link>

                <Link href="/password">
                    <a>
                        <li className="px-4 py-2 hover:bg-pink-600">
                            Password
                        </li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar
