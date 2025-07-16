const { SWEETS } = require('../store/SWEETS');
const { addSweet } = require('../app/addSweet.js');

describe('addSweet', () => {
    beforeEach(() => {
        SWEETS.length = 0; // clear array
    });

    test("should generate UUIDs for each sweet", () => {
        addSweet("Kaju Katli", "Dry Fruit", 500, 20);
        addSweet("Gulab Jamun", "Fried", 300, 15);

        const ids = SWEETS.map(sweet => sweet.id);

        expect(ids.length).toBe(2);
        expect(new Set(ids).size).toBe(2); // ensure unique IDs
    });

    test("should add sweet to SWEETS array", () => {
        addSweet("Kaju Katli", "Dry Fruit", 500, 20);

        expect(SWEETS.length).toBe(1);
        expect(SWEETS[0].name).toBe("Kaju Katli");
    });

    test("should throw error for invalid name", () => {
        expect(() => {
            addSweet("", "Dry Fruit", 500, 20);
        }).toThrow("Invalid or missing sweet name.");
    });
});
