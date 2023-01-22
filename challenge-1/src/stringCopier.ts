export const stringCopier = (input: string) => {

    const copyRegex = /\[(?:CTRL\+C)]/g
    const pasteRegex = /\[(?:CTRL\+V)]/g

    if (input.split(copyRegex).length <= 1) {
        return input;
    }

    const arrayOfSplitStrings = input.split(copyRegex);

    if (arrayOfSplitStrings[1].search(pasteRegex) !== -1) {
        arrayOfSplitStrings[1] = arrayOfSplitStrings[0]
    }

    return arrayOfSplitStrings.join('')
};
