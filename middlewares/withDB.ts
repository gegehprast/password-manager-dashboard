import dbConnect from '../lib/dbConnect'
import { ApiMiddleware } from '../types/Type'

const withDB: ApiMiddleware = handler => async (req, res) => {
    await dbConnect()

    return await handler(req, res)
}

export default withDB
