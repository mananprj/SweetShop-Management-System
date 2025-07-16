function validateName(name) {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("Invalid or missing sweet name.");
  }

  return name;
}

function validateAmount(amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error("Amount must be a Positive integer and greater than zero.");
  }

  return amount;
}

module.exports = { validateName, validateAmount };