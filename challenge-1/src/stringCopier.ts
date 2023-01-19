import input from "../input.json";

export const stringCopier = (input: Array<string>) => {

    const tempArray: Array<string> = []
    const copyRegex = /\[(?:CTRL\+C)]/g
    const pasteRegex = /\[(?:CTRL\+V)]/g
    const inputString = input[0]
    if (inputString.split('[CTRL+C]').length <= 1) {
        tempArray.push(inputString)
        return tempArray;
    }
    const arrayOfSplitStrings = inputString.split('[CTRL+C]');

    arrayOfSplitStrings[1] = 'the first'
    return arrayOfSplitStrings.join('')
};
