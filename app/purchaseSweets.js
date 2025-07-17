const { validateName, validateAmount, searchForSweet, checkSweetQuantity } = require('../utils/validators.js');
const { SWEETS } = require('../store/SWEETS.js');

function purchaseSweets(orderList){

    if(!Array.isArray(orderList) || orderList.length === 0){
        throw new Error("Order list must be a non-empty array.");
    }

    const receipt = [];

    for(const item of orderList) {
        const { name, quantity } = item;

        validateAmount(quantity);
        validateName(name);

        const sweet = checkSweetQuantity(name, quantity);

         receipt.push({
            name: sweet.name,
            purchased: quantity,
            remaining: sweet.quantity
        });
    }

    return {
        message: "Purchase successful.",
        receipt
    };
}

module.exports = { purchaseSweets };