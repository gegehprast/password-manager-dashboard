import React, { useState } from 'react'

interface Props {
    show: boolean
    close: () => void
}

const AddPasswordModal: React.FC<Props> = ({ show, close }) => {
    const [app, setApp] = useState('')
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const storePassword = async () => {
        setSubmitting(true)

        const resp = await fetch(
            `/api/password/store`,
            {
                method: 'POST',
                body: JSON.stringify({
                    site: app,
                    identifier,
                    password,
                }),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
            }
        )
        const jsonResp = await resp.clone().json()

        setSubmitting(false)

        console.log(jsonResp)
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-pink-900 bg-opacity-50 ${
                show ? 'block' : 'hidden'
            }`}
        >
            <div
                className="absolute w-1/4 overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white rounded top-1/2 left-1/2"
                onClick={e => e.stopPropagation()}
            >
                {/* header */}
                <div className="p-2">Add Password</div>

                {/* body */}
                <div className="p-2 border-t">
                    <label className="inline-block mt-0">App</label>
                    <input
                        type="text"
                        className="w-full p-2 mt-1 border rounded"
                        value={app}
                        onChange={e => setApp(e.target.value)}
                    />

                    <label className="inline-block mt-4">Identifier</label>
                    <input
                        type="text"
                        autoComplete="off"
                        className="w-full p-2 mt-1 border rounded"
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
                    />

                    <label className="inline-block mt-4">Password</label>
                    <input
                        type="password"
                        autoComplete="off"
                        className="w-full p-2 mt-1 border rounded"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <div className="flex flex-row w-full mt-4">
                        <button
                            type="button"
                            className="px-2 py-1 text-white bg-gray-500 hover:bg-gray-600"
                            onClick={close}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="px-2 py-1 ml-2 text-white bg-pink-500 hover:bg-pink-600"
                            onClick={storePassword}
                        >
                            {submitting ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPasswordModal
