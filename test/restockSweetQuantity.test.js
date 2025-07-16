const { restockSweetQuantity } = require('../app/restockSweetQuantity.js');
const { SWEETS } = require('../store/SWEETS.js');
const { addSweet } = require('../app/addSweet.js');

describe('restockSweetQuantity', () => {

    beforeEach(() => {
        SWEETS.length = 0;
        addSweet("Kaju Katli", "Dry Fruit", 500, 10);
    });

    test("should restock quantity of an existing sweet", () => {
        restockSweetQuantity("Kaju Katli", 5);
        const sweet = SWEETS.find(sweet => sweet.name === "Kaju Katli");

        expect(sweet.quantity).toBe(15);
    });

    test("should throw an error if the sweet does not exist", () => {

        expect(() => restockSweetQuantity("Rasgulla", 5)).toThrow('Sweet with name "Rasgulla" not found.');
    });

    test("should throw error for invalid restock amount", () => {

        expect(() => restockSweetQuantity("Kaju Katli", -3)).toThrow("Restock amount must be a positive integer.");
        expect(() => restockSweetQuantity("Kaju Katli", 0)).toThrow("Restock amount must be a positive integer.");
        expect(() => restockSweetQuantity("Kaju Katli", 1.5)).toThrow("Restock amount must be a positive integer.");
    });
    
});
