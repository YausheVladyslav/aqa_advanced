// loop for
const number = 2

for (let i = 1; i <=10; i++) {
    console.log(number * i)
}

//loop while
const secondNumber = 3
let counter = 1

while(counter <= 10){
    console.log(secondNumber * counter)
    counter++
    if(counter > 10){
        counter = 0
        break
    }
}