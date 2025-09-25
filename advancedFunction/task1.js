function handleNum(number, handlEvenNumber, handleOddNumber) {
    if (number % 2 === 0) {
        handlEvenNumber()
    } else {
        handleOddNumber()
    }
}

function handleEven() {
    console.log("number is even")
}

function handleOdd() {
    console.log("number is odd")
}

handleNum(3, handleEven, handleOdd)