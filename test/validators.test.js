const { validateName, validateAmount, validateCategory, validateQuantity } = require('../utils/validators.js');
const { SWEETS } = require('../store/SWEETS.js');
const { searchForSweet, checkSweetQuantity } = require('../utils/validators.js');
const { addSweet } = require('../app/addSweet.js');

beforeEach(() => {
    SWEETS.length = 0;

    addSweet("Kaju Katli", "Dry Fruit", 500, 20);
    addSweet("Gulab Jamun", "Syrupy", 300, 30);
    addSweet("Rasgulla", "Syrupy", 280, 25);
})

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

describe('validateCategory', () => {
    test("should not throw for valid category", () => {
        expect(() => validateCategory("Syrupy")).not.toThrow();
    });

    test("should throw empty, null and non-string type", () => {
        expect(() => validateCategory("")).toThrow("Invalid or missing sweet category.");
        expect(() => validateCategory(null)).toThrow("Invalid or missing sweet category.");
        expect(() => validateCategory(123)).toThrow("Invalid or missing sweet category.");
    })
});

describe('validateAmount', () => {
    test("should not throw for valid amount", () => {
        expect(() => validateAmount(100)).not.toThrow();
    });

    test("should throw for negative, zero and non-number types", () => {
        expect(() => validateAmount(-10)).toThrow("Amount must be a Positive integer and greater than zero.");
        expect(() => validateAmount(0)).toThrow("Amount must be a Positive integer and greater than zero.");
        expect(() => validateAmount("abc")).toThrow("Amount must be a Positive integer and greater than zero.");
    });
});

describe('validateQuantity', () => {
    test("should not throw for valid quantity", () => {
        expect(() => validateQuantity(20)).not.toThrow();
    });

    test("should throw for negative, zero and non-number types", () => {
        expect(() => validateQuantity(-10)).toThrow("Quantity must be a Positive integer and greater than zero.");
        expect(() => validateQuantity(0)).toThrow("Quantity must be a Positive integer and greater than zero.");
        expect(() => validateQuantity("abc")).toThrow("Quantity must be a Positive integer and greater than zero.");
    });
});

describe('searchForSweet', () => {
    test("should find sweet by name", () => {
        expect(() => searchForSweet("Kaju Katli")).not.toThrow();
    });

    test("should throw if sweet not found", () => {
        expect(() => searchForSweet("Ladoo")).toThrow('Sweet "Ladoo" not found.');
    });
});

describe('checkSweetQuantity', () => {
    test("should not throw if enough quantity is available", () => {
        expect(() => checkSweetQuantity("Gulab Jamun", 10)).not.toThrow();
    });

    test("should throw if requested quantity exceeds available quantity", () => {
        expect(() => checkSweetQuantity("Rasgulla", 30)).toThrow('Only 25 Rasgulla sweets are available.');
    });
});