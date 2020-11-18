// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for (const element of sourceArray){
        newArray.push(-element)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (const element of sourceArray){
        newArray.push(element)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (const element of sourceArray){
        newArray.push(element*2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (const element of sourceArray){
        newArray.push(element*element)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    for (let i = 0; i < sourceArray.length; i++) {
        startingPoint += sourceArray[i];
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            newArray.push(sourceArray[i])
        }
    }
    if (newArray[0] === undefined) {
        return true
    }
    else {
    return false
    }
}

function reduceToAnyTrue(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            newArray.push(sourceArray[i])
        }
    }
    if (newArray[0] === undefined) {
        return false
    }
    else {
    return true
    }
}