const myName = "Vladyslav";
const number = 10;
const isBoolean = true;
const testNull = null;
const testUndefined = undefined;

let variablesArray = [myName, number, isBoolean, testNull, testUndefined];

for (const element in variablesArray) {
    console.log(variablesArray[element])
}