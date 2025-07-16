const { v4: uuidv4 } = require('uuid');
const { validateSweet } = require('../utils/validateSweet.js');
const { SWEETS } = require('../store/SWEETS.js');

function addSweet(name, category, price, quantity){
    const validation = validateSweet({ name, category, price, quantity });

    if(!validation.isValid){
        console.log("Validation failed: " + validation.errors.join(" "));
        return;
    }

    const newSweet = {
        id: uuidv4(),
        name,
        category,
        price,
        quantity
    }

    SWEETS.push(newSweet);

    return true;
}

module.exports = { addSweet };