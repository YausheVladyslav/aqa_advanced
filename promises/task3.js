async function getTodoById(id) {
    try {
        const response =  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return await response.json()
    } catch (error) {
        console.log(error.message)
    }
}


async function getUserById(id) {
    try {
        const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return await response.json()
    } catch (error) {
        console.log(error.message)
    }
}


let toDoById;
let userById;

Promise.all([getTodoById(1), getUserById(2)])
    .then(([toDo, user]) => {
        toDoById = toDo
        userById = user
        console.log("FIRST OF ALL: ", toDoById, "\nSECOND OF ALL: ", userById)
    })

let raceResult;

Promise.race([getTodoById(3), getUserById(4)])
    .then((value) => {
        raceResult = value
        console.log("RACE RESULT: ", raceResult)
    })