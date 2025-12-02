export const delay = async(handler: void | (() => {}) | (() => void) , delay: number) => {
    return setTimeout(() => { handler }, delay)
}