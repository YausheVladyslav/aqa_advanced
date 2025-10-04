let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 1]

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 0) {
        zeroCount++
    } else if (element < 0) {
        negativeCount++
    } else {
        positiveCount++
    }
}

console.log(
    `Кількість позитивних чисел: ${positiveCount}\n`, 
    `Кількість негативних чисел: ${negativeCount}\n`, 
    `Кількість нульових чисел: ${zeroCount}`)