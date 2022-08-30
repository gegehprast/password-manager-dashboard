import type { NextApiRequest, NextApiResponse } from 'next'

export type ApiHandler = (
    req: NextApiRequest,
    res: NextApiResponse<any>
) => Promise<void>

const withCORS = (handler: ApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true')

    if (req.headers.origin === 'http://localhost:3000') {
        res.setHeader('Access-Control-Allow-Origin', '*')
    } else {
        res.setHeader(
            'Access-Control-Allow-Origin',
            process.env.ALLOWED_ORIGIN as string
        )
    }

    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    )

    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method === 'OPTIONS') {
        res.status(200).end()

        return
    }

    return await handler(req, res)
}

export default withCORS
