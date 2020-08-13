//Import the js file to test
import { polarity} from "../src/client/js/formHandler"

describe("Testing for the polarity functionality", () => {
    test("Testing polarity() function", () => {
        expect(polarity("P")).toEqual("Positive")
    })
    test("Testing polarity() function", () => {
        expect(polarity("P+")).toEqual("Strongly Positive")
    })
    test("Testing polarity() function", () => {
        expect(polarity("N")).toEqual("Negative")
    })
    test("Testing polarity() function", () => {
        expect(polarity("N+")).toEqual("Strongly Negative")
    })
    test("Testing polarity() function", () => {
        expect(polarity("NONE")).toEqual("Without Sentiment")
    })
});


//Check if the function produces the expected output