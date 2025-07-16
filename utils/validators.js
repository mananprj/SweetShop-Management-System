function validateName(name) {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("Invalid or missing sweet name.");
  }

  return name;
}

function validateAmount(amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error("Price must be a number greater than 0.");
  }

  return amount;
}

module.exports = { validateName, validateAmount };