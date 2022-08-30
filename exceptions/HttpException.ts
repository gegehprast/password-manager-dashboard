class HttpException extends Error {
    /**
     * Exception name.
     */
    public name = 'HttpException'

    /**
     * HTTP message.
     */
    public message = 'Internal Server Error.'

    /**
     * HTTP Code
     */
    public code = 500

    constructor(code?: number, message?: string) {
        super()
        /**
         * what is this abomination?
         * @see https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, HttpException.prototype)

        if (code) {
            this.code = code
        }

        if (message) {
            this.message = message
        }
    }
}

export default HttpException
