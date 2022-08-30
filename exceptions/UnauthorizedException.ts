import HttpException from './HttpException'

class UnauthorizedException extends HttpException {
    /**
     * Exception name.
     */
    public name = 'UnauthorizedException'

    /**
     * HTTP message.
     */
    public message = 'Unauthorized.'

    /**
     * HTTP Code
     */
    public code = 401
}

export default UnauthorizedException
