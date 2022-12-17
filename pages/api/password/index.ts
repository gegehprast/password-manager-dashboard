// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import GET from '../../../middlewares/GET'
import withCORS from '../../../middlewares/withCORS'
import withDB from '../../../middlewares/withDB'
import Password, { IPasswordDoc } from '../../../models/Password'
import { ApiHandler } from '../../../types/Type'

export async function getPasswords() {
    return await Password.find().sort({ site: 1 }).exec()
}

const handler: ApiHandler<IPasswordDoc[]> = async (req, res) => {
    try {
        const passwords = await getPasswords()

        return res.json(passwords)
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, message: 'Internal server error.' })
    }
}

export default withCORS(GET(withDB(handler)))
