const { SWEETS } = require('../store/SWEETS.js');
const { addSweet } = require('../app/addSweet.js');
const { purchaseSweets } = require('../app/purchaseSweets.js');

describe('purchaseSweets', () => {

    beforeEach(() => {
        SWEETS.length = 0;

        addSweet("Kaju Katli", "Dry Fruit", 500, 10);
        addSweet("Ladoo", "Festival", 300, 20);
    });

    test("should purchase multiple sweets and reduce quantities", () => {
        const result = purchaseSweets([
            { name: "Kaju Katli", quantity: 3 },
            { name: "Ladoo", quantity: 5 }
        ]);

        expect(result.message).toBe("Purchase successful.");
        expect(result.receipt).toEqual(expect.arrayContaining([
            { name: "Kaju Katli", purchased: 3, remaining: 7 },
            { name: "Ladoo", purchased: 5, remaining: 15 }
        ]));
    });

    test("should throw error if quantity exceeds stock", () => {

        expect(() => purchaseSweets([{ name: "Kaju Katli", quantity: 15 }])).toThrow("Only 10 Kaju Katli sweets are available.");
    });

    test("should throw error if order list is empty", () => {

        expect(() => purchaseSweets([])).toThrow("Order list must be a non-empty array.");
    });

    test("should throw error for invalid quantity", () => {

        expect(() => purchaseSweets([{ name: "Ladoo", quantity: -1 }])).toThrow("Amount must be a Positive integer and greater than zero.");
    })
});
