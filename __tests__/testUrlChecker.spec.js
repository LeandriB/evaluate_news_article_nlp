import { evaluate } from "../src/client/js/evaluateInput"


describe('Testing url validation functionality' , () => {
    test("Testing the evaluate() function for valid urls", async () => {
            expect(typeof evaluate).toBe("function");
        });
});

describe("test for a valid URL", () => {
    const formValue = "https://www.cnn.com/";
        test('should be returned with a valid URL', async () => {
            const response = evaluate(formValue);
            expect(response).toBeDefined();
            expect(response).toBe(1); // make true instead of 1 in both test and urlChecker?
        });
});