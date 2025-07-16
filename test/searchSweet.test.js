const { SWEETS } = require('../store/SWEETS.js');
const { addSweet } = require('../app/addSweet.js');
const { searchSweetByKeyword } = require('../app/searchSweet.js');

describe('searchSweetByKeyword', () => {

    beforeEach(() => {
        SWEETS.length = 0;

        addSweet("Kaju Katli", "Dry Fruit", 500, 10);
        addSweet("Gulab Jamun", "Syrupy", 300, 15);
        addSweet("Ladoo", "Festival", 200, 20);
        addSweet("Rasgulla", "Syrupy", 250, 12);
    });

    test("should find sweets by category or name (partial match, case-insensitive", () => {
        const result = searchSweetByKeyword("syrupy");

        expect(result).toLength(2);
        expect(result.map(s => s.name)).toEqual(expect.arrayContaining(["Gulab Jamun", "Rasgulla"]));
    })

    test("should return empty array if no matches found", () => {
        const result = searchSweetByKeyword("halwa");

        expect(result).toEqual([]);
    });

    test("should throw error for empty or invalid input", () => {

        expect(() => searchSweetByKeyword("")).toThrow("Invalid or missing sweet name.");
        expect(() => searchSweetByKeyword(123)).toThrow("Invalid or missing sweet name.");
    });

})