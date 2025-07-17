const { validateAmount, validateName, searchForSweet } = require('../utils/validators.js');
const { SWEETS } = require('../store/SWEETS.js');

function restockSweetQuantity(name, amount){

    validateAmount(amount);
    validateName(name);

    const sweet = searchForSweet(name);

    sweet.quantity += amount;
}

module.exports = { restockSweetQuantity };