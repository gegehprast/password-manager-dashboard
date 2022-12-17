// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import withCORS from '../../middlewares/withCORS'
import withDB from '../../middlewares/withDB'
import User, { IUserDoc } from '../../models/User'
import POST from '../../middlewares/POST'
import { ApiHandler } from '../../types/Type'

const handler: ApiHandler<IUserDoc> = async (req, res) => {
    try {
        const password = await bcrypt.hash(req.query.password as string, 10)
        const user = new User({
            username: req.query.username,
            password: password,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        await user.save()

        return res.json({ ok: true, data: user })
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, message: 'Internal server error.' })
    }
}

export default withCORS(POST(withDB(handler)))
