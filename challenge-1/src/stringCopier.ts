export const stringCopier = (input: string) => {

    const copyRegex = /\[(?:CTRL\+C)]/g
    const pasteRegex = /\[(?:CTRL\+V)]/g

    if (input.split(copyRegex).length <= 1) {
        // check for pasteRegex, then cut this from the string and return the original input
        return input.replace(pasteRegex, '');
    }

    const arrayOfSplitStrings = input.split(copyRegex);

    const stringToCopy = arrayOfSplitStrings[0]

    return arrayOfSplitStrings.join('').replace(pasteRegex, stringToCopy);
};
