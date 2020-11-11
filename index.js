const mapToNegativize = (array) => {
    let result = []
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] * -1)
    }
    return result
}

const mapToNoChange = (sourceArray) => {
    let result = [];
    for(let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i])
    }
    return result
}

const mapToDouble = (sourceArray) => {
    let result = [];
    for(let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * 2)
    }
    return result
}

const mapToSquare = (sourceArray) => {
    let result = [];
    for(let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * sourceArray[i])
    }
    return result
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint;
    for(let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total 
}

const reduceToAllTrue = (sourceArray) => {
    for (let i=0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false 
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i=0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false

}

