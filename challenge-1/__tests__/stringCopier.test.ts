import { stringCopier } from "../src/stringCopier";

describe("Tests the string copier function", () => {
    it("should return the same string", () => {
        const simpleTestString = ["hello"];
        expect(stringCopier(["hello"])).toStrictEqual(simpleTestString);
    });

    it("when no [CTRL+C] is found the original string is returned", () => {
        const inputString = ["the first"];
        const expectedResult = ["the first"]
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
    });

    it("when [CTRL+C] is found the content before is saved and pasted when [CTRL+V] appears", () => {
        const inputString = ["the first[CTRL+C][CTRL+V]"];
        const expectedResult = "the firstthe first"
        expect(stringCopier(inputString)).toStrictEqual(expectedResult);
    });
});
