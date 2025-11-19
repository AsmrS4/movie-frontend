export const delay = async(handler: void | (() => {}) , delay: number) => {
    return setTimeout(() => { handler }, delay)
}