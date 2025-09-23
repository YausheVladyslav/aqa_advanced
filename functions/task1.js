
function declarationMultiplyVariables(width, height){
return width * height
}

console.log("Declaration function: " + declarationMultiplyVariables(5, 10))

const expressionMultiplyVariables = function(width, height){
return width * height
}

console.log("Expression function: " + expressionMultiplyVariables(2, 10))

const arrowMultiplyVariables = (width, height) => {
return width * height
}

console.log("Arrow function: " + arrowMultiplyVariables(3, 5))
