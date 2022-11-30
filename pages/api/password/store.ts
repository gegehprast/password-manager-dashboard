// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import POST from '../../../middlewares/POST'
import withCORS from '../../../middlewares/withCORS'
import withDB from '../../../middlewares/withDB'
import Password, { IPasswordDoc } from '../../../models/Password'
import { SuccessResponse } from '../../../types/Type'

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SuccessResponse<IPasswordDoc>>
) {
    const password = new Password({
        site: req.body.site,
        identifier: req.body.identifier,
        password: req.body.password,
        createdAt: new Date(),
        updatedAt: new Date(),
    })

    await password.save()

    res.json({ ok: true, data: password })
}

export default withCORS(POST(withDB(handler)))
