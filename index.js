// function mapToNegativize(array) {
//     return array.map(x => x * -1)
// }

// function mapToNoChange(array) {
//     return array.map(x => x)
// }

// function mapToDouble(array) {
//     return array.map(x => x * 2)
// }

// function mapToSquare(array) {
//     return array.map(x => x * x)
// }

// function reduceToTotal(array, start = 0) {
//     function sum(start, num) {
//         return start + num;
//     }
//     return (array.reduce(sum) + start)
// }

// function reduceToAllTrue(array) {
//     function truthy(group, test) {
//         if (group === false) {
//             test = false
//         } else {
//             test = true
//         }
//         return test
//     }
//     return array.reduce(truthy)
// }

// function reduceToAnyTrue(array) {
//     function truthy(group) {
//         if (group === true) {
//             return true
//         } else {
//             return false
//         }
//     }
//     return array.reduce(truthy)
// }

function mapToNegativize(array) {
    let negative = []
    for (let i = 0; i < array.length; i++) {
        negative.push(array[i] * -1)
    }
    return negative
}

function mapToNoChange(array) {
    let same = []
    for (let i = 0; i < array.length; i++) {
        same.push(array[i])
    }
    return same
}

function mapToDouble(array) {
    let double = []
    for (let i = 0; i < array.length; i++) {
        double.push(array[i] * 2)
    }
    return double
}

function mapToSquare(array) {
    let square = []
    for (let i = 0; i < array.length; i++) {
        square.push(array[i] * array[i])
    }
    return square
}

function reduceToTotal(array, start = 0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    let test = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            test = false
        }
    }
    return test
}

function reduceToAnyTrue(array) {
    let test = false
    for (let i = 0; i < array.length; i++){
        if (array[i] == true) {
            test = true
        }
    }
    return test
}