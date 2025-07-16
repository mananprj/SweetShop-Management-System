const { deleteSweetByName } = require('../app/deleteSweet.js');
const { SWEETS } = require('../store/SWEETS.js');
const { addSweet } = require('../app/addSweet.js');

describe('deleteSweetByName', () => {

    beforeEach(() => {
        SWEETS.length = 0;

        addSweet("Kaju Katli", "Dry Fruit", 500, 20);
        addSweet("Gulab Jamun", "Syrupy", 300, 30);
        addSweet("Rasgulla", "Syrupy", 280, 25);
    });

    test("should delete sweet with given name", () => {
        const result = deleteSweetByName("Gulab Jamun");

        expect(result).toBe(true);
        expect(SWEETS.length).toBe(2);
        expect(SWEETS.find(s => s.name === "Gulab Jamun")).toBeUndefined();
    })

    test("should return false if sweet name doesn't exist", () => {
        const result = deleteSweetByName("Ladoo");

        expect(result).toBe(false);
        expect(SWEETS.length).toBe(3);
    });

});
