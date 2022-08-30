import HttpException from './HttpException'

class UserNotFoundException extends HttpException {
    /**
     * Exception name.
     */
    public name = 'UserNotFoundException'

    /**
     * HTTP message.
     */
    public message = 'User not found.'

    /**
     * HTTP Code
     */
    public code = 404
}

export default UserNotFoundException
