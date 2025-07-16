const { validateAmount, validateName } = require('../utils/validators.js');
const { SWEETS } = require('../store/SWEETS.js');

function restockSweetQuantity(name, amount){

    validateAmount(amount);
    validateName(name);

    const sweet = SWEETS.find(s => s.name.toLowerCase() === name.toLowerCase());

    if(!sweet){
        throw new Error(`Sweet with name "${name}" not found.`);
    }

    sweet.quantity += amount;
}

module.exports = { restockSweetQuantity };