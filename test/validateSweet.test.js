const { validateSweet } = require("../utils/validateSweet.js");

describe("validateSweet", () => {
    test("should pass for valid input", () => {
        const input = {
            name: "Kaju Katli",
            category: "Dry Fruit",
            price: 500,
            quantity: 10
        };

        const result = validateSweet(input);
        expect(result.isValid).toBe(true);
        expect(result.errors).toHaveLength(0);
    });

    test("should fail for name is missing", () => {
        const input = {
            name: "",
            category: "Dry Fruit",
            price: 500,
            quantity: 10
        };

        const result = validateSweet(input);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Invalid or missing sweet name.");
    })

    test("should fail for category is missing", () => {
        const input = {
            name: "Kaju Katli",
            category: "",
            price: 500,
            quantity: 10
        };

        const result = validateSweet(input);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Invalid or missing sweet category.");
    });

    test("should fail if price is zero or negative", () => {
        const input = {
            name: "Kaju Katli",
            category: "Dry Fruit",
            price: 0,
            quantity: 10
        };

        const result = validateSweet(input);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Price must be a number greater than 0.");
    });

    test("should fail if quantity is zero or negative integer", () => {
        const input = {
            name: "Kaju Katli",
            category: "Dry Fruit",
            price: 500,
            quantity: -2.5
        };

        const result = validateSweet(input);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Quantity must be a integer greater than 0.");
    });
});