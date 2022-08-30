import UnauthorizedException from './UnauthorizedException'

class PasswordMismatchException extends UnauthorizedException {
    /**
     * Exception name.
     */
    public name = 'PasswordMismatchException'

    /**
     * HTTP message.
     */
    public message = 'Password mismatch.'
}

export default PasswordMismatchException
