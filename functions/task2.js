const isPersonAdult = (age) => {
    return age >= 18
}

console.log("Check the first person is adult: " + isPersonAdult(15), " \nCheck the second person is adult: " +  isPersonAdult(25))