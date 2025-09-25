function divide(numerator, denominator) {
    if (typeof (numerator) !== "number" || typeof (denominator) !== "number") {
        throw new Error("Value should be a number");
    }

    if (denominator === 0) {
        throw new Error("denominator can't be 0");
    }

    return numerator / denominator
}

try {
    divide(2, 0)
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена")
}

try {
    divide(2, "4")
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена")
}

try {
    divide("2", 0)
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена")
}
