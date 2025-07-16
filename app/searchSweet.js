const { validateName } = require("../utils/validators.js");
const { SWEETS } = require("../store/SWEETS.js");

function searchSweetByKeyword(keyword){

    validateName(keyword);

    const lowerKeyword = keyword.toLowerCase();

    return SWEETS.filter(sweet => 
        sweet.name.toLowerCase().includes(lowerKeyword) || 
        sweet.category.toLowerCase().includes(lowerKeyword)
    );
}

module.exports = { searchSweetByKeyword };