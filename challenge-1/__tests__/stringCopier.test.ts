import { stringCopier } from "../src/stringCopier";

describe("Tests the string copier function", () => {
    it("should return the same string", () => {
        const simpleTestString = ["hello"];
        expect(stringCopier(["hello"])).toStrictEqual(simpleTestString);
    });
});
