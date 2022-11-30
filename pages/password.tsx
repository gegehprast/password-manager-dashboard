import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import AddPasswordModal from '../components/AddPasswordModal'
import { IPasswordDoc } from '../models/Password'
import { getPasswords } from './api/password'
import { MyNextPage } from './_app'

interface Props {
    passwords: IPasswordDoc[]
}

const Password: MyNextPage<Props> = ({ passwords }) => {
    const [passwordsState, setPasswordsState] = useState(passwords)
    const [showAddPasswordModal, setShowAddPasswordModal] = useState(false)

    const closeAddPasswordModal = async (reFetch = false) => {
        if (reFetch) {
            const resp = await fetch(`/api/password`)
            const jsonResp = await resp.clone().json()

            setPasswordsState(jsonResp)
        }

        setShowAddPasswordModal(false)
    }

    return (
        <div className="w-full">
            <div className="">
                <button
                    type="button"
                    className="px-2 py-1 text-white bg-pink-500 hover:bg-pink-600"
                    onClick={() => setShowAddPasswordModal(true)}
                >
                    Add
                </button>

                <button
                    type="button"
                    className="px-2 py-1 ml-2 text-white bg-pink-500 hover:bg-pink-600"
                >
                    Import
                </button>
            </div>

            <table className="w-full mt-2 table-fixed xl:w-1/2">
                <thead className="text-white bg-pink-500">
                    <tr>
                        <th className="p-2 border border-pink-500">App</th>
                        <th className="p-2 border border-pink-500">
                            Identifier
                        </th>
                        <th className="p-2 border border-pink-500">Password</th>
                    </tr>
                </thead>

                <tbody>
                    {passwordsState.map(password => (
                        <tr key={password._id}>
                            <td className="border border-pink-500">
                                <input
                                    type="text"
                                    className="w-full p-2"
                                    value={password.site}
                                    readOnly={true}
                                />
                            </td>
                            <td className="border border-pink-500">
                                <input
                                    type="text"
                                    className="w-full p-2"
                                    value={password.identifier}
                                    readOnly={true}
                                />
                            </td>
                            <td className="border border-pink-500">
                                <input
                                    type="password"
                                    className="w-full p-2"
                                    value={password.password}
                                    readOnly={true}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <AddPasswordModal
                show={showAddPasswordModal}
                close={closeAddPasswordModal}
            />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const passwords = await getPasswords()

    return {
        props: {
            passwords: JSON.parse(JSON.stringify(passwords)),
        },
    }
}

export default Password
