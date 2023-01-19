import { stringCopier } from "../src/stringCopier";

describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        const simpleTestString = ["hello"];

        expect(stringCopier(["hello"])).toStrictEqual(simpleTestString);
    });
});
