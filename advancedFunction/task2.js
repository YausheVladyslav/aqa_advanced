function getCountByDown(number) {
    if (number <= 0) {
        return
    }
    console.log(number)

    getCountByDown(number - 1)
}

getCountByDown(5)