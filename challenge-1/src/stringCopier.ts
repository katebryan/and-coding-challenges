import input from "../input.json";

export const stringCopier = (input: Array<string>) => {
    const inputString = input[0]
    return inputString.split('[CTRL+C]');
};
