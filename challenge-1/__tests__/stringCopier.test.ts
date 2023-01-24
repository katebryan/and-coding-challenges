import { stringCopier } from "../src/stringCopier";

describe("Tests the string copier function", () => {
    it("should return the same string", () => {
        const simpleTestString = "hello";
        expect(stringCopier("hello")).toStrictEqual(simpleTestString);
    });

    it("when no [CTRL+C] is found the original string is returned", () => {
        const inputString = "the first";
        const expectedResult = "the first";
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
    });

    it("when only [CTRL+V] is present, the original string is returned with the command cut", () => {
        const inputString = "[CTRL+V]the tall oak tree towers over the lush green meadow.";
        const expectedResult = "the tall oak tree towers over the lush green meadow.";
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
    });

    it("when [CTRL+C] is found, the content before is saved and pasted when [CTRL+V] appears", () => {
        const inputString = "the first[CTRL+C][CTRL+V]";
        const expectedResult = "the firstthe first"
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
    });

    it("when [CTRL+C] is found, the content before is saved and pasted when [CTRL+V] appears, all other content in the string remains", () => {
        const inputString = "the first[CTRL+C] Coding Challenge was [CTRL+V] string manipulation task";
        const expectedResult = "the first Coding Challenge was the first string manipulation task";
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
        const inputString2 = "the big red[CTRL+C] fox jumps over [CTRL+V] lazy dog.";
        const expectedResult2 = "the big red fox jumps over the big red lazy dog.";
        expect(stringCopier(inputString2)).toStrictEqual(expectedResult2);
    });

    it("when multiple instances of [CTRL+C] and [CTRL+V] are found, the content before is saved and pasted for each", () => {
        const inputString = "the sun shines down[CTRL+C] on [CTRL+V][CTRL+C] the busy [CTRL+V].";
        const expectedResult = "the sun shines down on the sun shines down the busy the sun shines down on the sun shines down."
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
    });
});
