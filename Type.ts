import type { NextApiRequest, NextApiResponse } from 'next'

export type ApiHandler = (
    req: NextApiRequest,
    res: NextApiResponse<any>
) => Promise<void>

export type ApiMiddleware = (handler: ApiHandler) => ApiHandler