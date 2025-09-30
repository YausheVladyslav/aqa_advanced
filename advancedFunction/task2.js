function countByDown(number) {
    if (number <= 0) {
        return
    }
    console.log(number)

    countByDown(number - 1)
}

countByDown(5)