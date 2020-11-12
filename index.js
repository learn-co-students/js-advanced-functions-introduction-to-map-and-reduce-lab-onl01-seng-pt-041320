// Your code here

// convert values to negative 

function mapToNegativize(sourceArray) {
    return sourceArray.map((element) => {return (~element + 1)});
}

// map to no change

function mapToNoChange(sourceArray){
    return sourceArray.map((element) => {return element})
}

// map to double

function mapToDouble(sourceArray){
    return sourceArray.map((element) => {return element * 2})
}

// map to square

function mapToSquare(sourceArray){
    return sourceArray.map((element) => {return Math.pow(element, 2)})
}

// function reduceToTotal

function reduceToTotal(sourceArray, startingPoint=0) {
    const reducer = (sum, val) => sum + val;
    return sourceArray.reduce(reducer, startingPoint);
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }