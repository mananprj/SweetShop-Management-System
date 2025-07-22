const { SWEETS } = require('../store/SWEETS.js');
const { sortByCategory, sortByPrice } = require('../utils/validators.js')

function sortSweets({ by = "category", order = "asc" }){

    const sorted = [...SWEETS];

    if(by === "category"){

      return sortByCategory(sorted,order);

    } else if(by === "price"){

        return sortByPrice(sorted, order);

    } else{

        throw new Error("Invalid sort field. Use 'category' or 'price'.");
    }

}

module.exports = { sortSweets };