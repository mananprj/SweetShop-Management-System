const { v4: uuidv4 } = require('uuid');
// const { validateSweet } = require('../utils/validateSweet.js');
const { SWEETS } = require('../store/SWEETS.js');
const { validateName, validateCategory, validateAmount, validateQuantity, validatekeyword } = require('../utils/validators.js');

function addSweet(name, category, price, quantity){
    
    validateName(name);
    validatekeyword(category);
    validateAmount(price);
    validateQuantity(quantity);

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