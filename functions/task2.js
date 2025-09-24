const isPersoneAdult = (age) => {
    return age >= 18
}

console.log("Check the first person is adult: " + isPersoneAdult(15), " \nCheck the second person is adult: " +  isPersoneAdult(25))