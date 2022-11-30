// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import withCORS from '../../middlewares/withCORS'
import withDB from '../../middlewares/withDB'
import User, { IUserDoc } from '../../models/User'
import POST from '../../middlewares/POST'

type Data = {
    ok: boolean
    data: IUserDoc
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const password = await bcrypt.hash(req.query.password as string, 10)
    const user = new User({
        username: req.query.username,
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
    })

    await user.save()

    res.json({ ok: true, data: user })
}

export default withCORS(POST(withDB(handler)))
