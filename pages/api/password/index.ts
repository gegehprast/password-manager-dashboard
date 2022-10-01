// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import withCORS from '../../../middlewares/withCORS'
import withDB from '../../../middlewares/withDB'
import Password, { IPasswordDoc } from '../../../models/Password'

export async function getPasswords() {
    return await Password.find().sort({ site: 1 }).exec()
}

async function handler(req: NextApiRequest, res: NextApiResponse<IPasswordDoc[]>) {
    const passwords = await getPasswords()

    res.json(passwords)
}

export default withCORS(withDB(handler))
