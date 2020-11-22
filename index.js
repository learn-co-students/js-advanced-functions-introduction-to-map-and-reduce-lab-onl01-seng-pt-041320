// Your code here

// mapToNegativize returns an array with all values made negative
// 1) transforms correctly

function mapToNegativize(array) {
  let newArray = []
for (let i = 0; i < array.length; i++) {
    newArray.push(-1 * array[i])
}
return newArray

}

function mapToNoChange(array) {
    for (let i = 0; i < array.length; i++) {
}
 return array
}

 function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(2 * array[i])
    }
    return newArray
}

function mapToSquare(array) {
     let squareArray = []
    for (let i = 0; i < array.length; i++) {
        squareArray.push(array[i] * array[i])
    }
    return squareArray
}

function reduceToTotal(array, startingPoint = 0) {
    let sum = startingPoint
    for (let i = 0; i < array.length; i++ ) {
        sum = sum + array[i]
    }
    return sum
  }
  
  function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
  }
 
function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] === true) return true;
      }
      return false
}
