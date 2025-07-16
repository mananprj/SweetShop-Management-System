const { SWEETS } = require('../store/SWEETS.js');
const { addSweet } = require('../app/addSweet.js');
const { sortSweets } = require('../app/sortSweets.js');

describe('sortSweets', () => {

    beforeEach(() => {
        SWEETS.length = 0;

        addSweet("Kaju Katli", "Dry Fruit", 500, 10);
        addSweet("Gulab Jamun", "Syrupy", 300, 15);
        addSweet("Rasgulla", "Syrupy", 200, 0);
        addSweet("Ladoo", "Festival", 400, 20);
    });

    test("should sort sweets by category ascending", () => {
        const result = sortSweets({ by: "category", order: "asc" });

        expect(result.map(s => s.category)).toEqual(["Dry Fruit", "Festival", "Syrupy", "Syrupy"]);
    });

    test("should sort sweets by category descending", () => {
        const result = sortSweets({ by: "category", order: "desc" });

        expect(result.map(s => s.category)).toEqual(["Syrupy", "Syrupy", "Festival", "Dry Fruit"]);
    });

    test("should sort sweets by price ascending", () => {
        const result = sortSweets({ by: "price", order: "asc" });

        expect(result.map(s => s.price)).toEqual([200, 300, 400, 500]);
    });

    test("should sort sweets by price descending", () => {
        const result = sortSweets({ by: "price", order: "desc" });

        expect(result.map(s => s.price)).toEqual([500, 400, 300, 200]);
    });

    test("should throw error for invalid sort field", () => {
        
        expect(() => sortSweets({ by: "invalid" })).toThrow("Invalid sort field. Use 'category' or 'price'.");
    });

});
