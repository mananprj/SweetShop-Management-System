const { validateName, validateAmount } = require('../utils/validators.js');

describe('validateName', () => {
    test("should not throw for valid name", () => {
        expect(() => validateName("Rasgulla")).not.toThrow();
    });

    test("should throw empty, null and non-string type", () => {
        expect(() => validateName("")).toThrow("Invalid or missing sweet name.");
        expect(() => validateName(null)).toThrow("Invalid or missing sweet name.");
        expect(() => validateName(123)).toThrow("Invalid or missing sweet name.");
    })
});

describe('validateAmount', () => {
    test("should not throw for valid amount", () => {
        expect(() => validateAmount(100)).not.toThrow();
    });

    test("should throw for negative, zero and non-number types", () => {
        expect(() => validateAmount(-10)).toThrow("Price must be a number greater than 0.");
        expect(() => validateAmount(0)).toThrow("Price must be a number greater than 0.");
        expect(() => validateAmount("abc")).toThrow("Price must be a number greater than 0.");
    });
})