import React from 'react'
import { signOut } from 'next-auth/react'

const Dashboard = () => {
    return (
        <div>
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
        </div>
    )
}

export default Dashboard
