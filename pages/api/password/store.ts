// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import POST from '../../../middlewares/POST'
import withCORS from '../../../middlewares/withCORS'
import withDB from '../../../middlewares/withDB'
import Password, { IPasswordDoc } from '../../../models/Password'
import { ApiHandler, ApiResponse } from '../../../types/Type'

const handler: ApiHandler<IPasswordDoc> = async (req, res) => {
    try {
        const password = new Password({
            site: req.body.site,
            identifier: req.body.identifier,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        await password.save()

        return res.json({ ok: true, data: password })
    } catch (error: any) {
        if (error.name === 'MongoServerError') {
            if (error.code && error.code === 11000) {
                return handleDuplicateKeyError(error, res)
            }

            return res
                .status(400)
                .json({ ok: false, message: (error as Error).message })
        }

        return res
            .status(500)
            .json({ ok: false, message: 'Internal server error.' })
    }
}

const handleDuplicateKeyError = (
    err: any,
    res: NextApiResponse<ApiResponse>
) => {
    const field = Object.keys(err.keyValue).map(item => `"${item}"`).join(', ')
    const code = 409

    res.status(code).json({ ok: false, message: `Data with that ${field} already exists.` })
}

export default withCORS(POST(withDB(handler)))
