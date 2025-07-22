const { SWEETS } = require('../store/SWEETS.js');

function validateName(name) {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("Invalid or missing sweet name.");
  }
}

function validatekeyword(keyword) {
  if (!keyword || typeof keyword !== "string" || !keyword.trim()) {
    throw new Error("Invalid or missing sweet keyword.");
  }
}

function validateAmount(amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error("Amount must be a Positive integer and greater than zero.");
  }
}

function validateQuantity(quantity) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a Positive integer and greater than zero.");
  }
}

function searchForSweet(name) {
  const sweet = SWEETS.find(s => s.name.toLowerCase() === name.toLowerCase());

  if (!sweet) {
    throw new Error(`Sweet "${name}" not found.`);
  }

  return sweet;
}

function checkSweetQuantity(name, quantity) {
  const sweet = searchForSweet(name);

  if (sweet.quantity < quantity) {
    throw new Error(`Only ${sweet.quantity} ${sweet.name} sweets are available.`);
  }

  sweet.quantity -= quantity;
  return sweet;
}

function sortByCategory(sorted, order){

     sorted.sort((a, b) => {
            const aCat = a.category.toLowerCase();
            const bCat = b.category.toLowerCase();
            return order === "asc" ? aCat.localeCompare(bCat) : bCat.localeCompare(aCat);
        });

    return sorted;
}


module.exports = { validateName, validateAmount, searchForSweet, checkSweetQuantity, validatekeyword, validateQuantity , sortByCategory };