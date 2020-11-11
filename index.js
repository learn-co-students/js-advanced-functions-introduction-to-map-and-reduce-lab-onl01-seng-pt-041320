function mapToNegativize(sourceArray) {
    return sourceArray.map(x => -x);
}

// function mapToNegativize(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(-1 * src[i])
//     }
//     return r
//   }
  

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x);
}

// function reduceToTotal(sourceArray, startingPoint=0) {
//     let value = startingPoint
//     for(let i=0; i < sourceArray.length; i++) {
//          value += sourceArray[i];
//         }
//         return value
// }

function reduceToTotal(sourceArray, startingPoint=0) {
    const reducer = (accumulator, item) => {
        return accumulator + item;
    };
    const total = sourceArray.reduce(reducer, startingPoint)
    return total;
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
    }

    
  

