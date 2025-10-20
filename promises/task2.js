function getTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error)
        })
}

function getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error)
        })
}


let toDoById;
let userById;

Promise.all([getTodoById(1), getUserById(2)])
.then(([toDo, user]) => {
    toDoById = toDo
    userById = user
    console.log("FIRST OF ALL: ",toDoById, "\nSECOND OF ALL: ", userById)
})

let raceResult;

Promise.race([getTodoById(3), getUserById(4)])
.then((value) => {
    raceResult = value
    console.log("RACE RESULT: ",raceResult)
})
.catch((error) => {console.log(error)})