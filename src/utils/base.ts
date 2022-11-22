// Extract first word from string
export const getFirstWord = (string: string) => {
    if (string !== undefined) {
        return `${string.substr(0, string.indexOf(' '))} `
    }
}

export const getRestOfString = (string: string) => {
    if (string !== undefined) {
        return string.substr(string.indexOf(' ') + 1)
    }
}
