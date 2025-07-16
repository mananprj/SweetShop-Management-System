function validateSweet({ name, category, price, quantity }) {
    const errors = [];
    let isValid = true;

    if (!name || typeof name !== 'string' || name.trim() === "") {
        errors.push("Invalid or missing sweet name.");
        isValid = false;
    }

    if (!category || typeof category !== 'string' || category.trim() === "") {
        errors.push("Invalid or missing sweet category.");
        isValid = false;
    }

    if (typeof price !== 'number' || price <= 0) {
        errors.push("Price must be a number greater than 0.");
        isValid = false;
    }

    if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity <= 0) {
        errors.push("Quantity must be a integer greater than 0.");
        isValid = false;
    }

    return { isValid, errors };
}

module.exports = {validateSweet};