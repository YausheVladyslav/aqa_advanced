async function getTodoById(id) {
    try {
        return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((result) => result.json())
    } catch (error) {
        console.log(error.message)
    }
}


async function getUserById(id) {
    try {
        return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((result) => result.json())
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