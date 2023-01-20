export const stringCopier = (input: Array<string>) => {
    const tempArray: Array<string> = []

    const copyRegex = /\[(?:CTRL\+C)]/g
    const pasteRegex = /\[(?:CTRL\+V)]/g
    const inputString = input[0]

    if (inputString.split(copyRegex).length <= 1) {
        tempArray.push(inputString)
        return tempArray;
    }

    const arrayOfSplitStrings = inputString.split(copyRegex);

    if (arrayOfSplitStrings[1].search(pasteRegex) !== -1) {
        arrayOfSplitStrings[1] = arrayOfSplitStrings[0]
    }

    return arrayOfSplitStrings.join('')
};
