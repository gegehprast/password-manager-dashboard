/**
 * Throw an Error when condition is met.
 *
 * @param condition
 * @param error
 * @throws
 */
export const throwIf = (
    condition: boolean | null | undefined,
    error: Error | string
) => {
    if (condition) {
        if (typeof error === 'string') {
            throw new Error(error)
        } else if (error instanceof Error) {
            throw error
        }
    }
}

/**
 * Throw an Error unless condition is met.
 *
 * @param condition
 * @param error
 * @throws
 */
export const throwUnless = (
    condition: boolean | null | undefined,
    error: Error | string
) => {
    throwIf(!condition, error)
}
