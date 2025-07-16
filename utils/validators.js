const { SWEETS } = require('../store/SWEETS.js');

function validateName(name) {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("Invalid or missing sweet name.");
  }
}

function validateCategory(category) {
  if (!category || typeof category !== "string" || !category.trim()) {
    throw new Error("Invalid or missing sweet category.");
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

  if(!sweet){
    throw new Error(`Sweet "${name}" not found.`);
  }
}

function checkSweetQuantity(name, quantity) {
  const sweet = SWEETS.find(s => s.name.toLowerCase() === name.toLowerCase());

  if (sweet.quantity < quantity) {
    throw new Error(`Only ${sweet.quantity} ${sweet.name} sweets are available.`);
  }
}

module.exports = { validateName, validateAmount, searchForSweet, checkSweetQuantity, validateCategory, validateQuantity };