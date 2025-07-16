const { SWEETS } = require('../store/SWEETS.js');

function sortSweets({ by = "category", order = "asc" }){

    const sorted = [...SWEETS];

    if(by === "category"){

        sorted.sort((a, b) => {
            const aCat = a.category.toLowerCase();
            const bCat = b.category.toLowerCase();
            return order === "asc" ? aCat.localeCompare(bCat) : bCat.localeCompare(aCat);
        });

    } else if(by === "price"){

        sorted.sort((a, b) => {
            return order === "asc" ? a.price - b.price : b.price - a.price;
        });

    } else{

        throw new Error("Invalid sort field. Use 'category' or 'price'.");
    }

    return sorted;
}

module.exports = { sortSweets };