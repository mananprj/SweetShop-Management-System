const { SWEETS } = require('../store/SWEETS.js');

function deleteSweetByName(name){
    const index = SWEETS.findIndex(sweet => sweet.name === name);
    
    if(index !== -1){
        SWEETS.splice(index, 1);
        return true;  // Deleted
    }
    
    return false; // Not found
}

module.exports = { deleteSweetByName };