const checkPersonAge = (age) => {
    if (age >= 18){
        return true
    } else{
        return false
    }
}

console.log("Check the first person is adult: " + checkPersonAge(15), " \nCheck the second person is adult: " +  checkPersonAge(25))