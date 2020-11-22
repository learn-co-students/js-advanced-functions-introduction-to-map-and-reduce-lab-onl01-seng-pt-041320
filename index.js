// Your code here

function mapToNegativize(array) {
  // let newArray = []
  return array.map(arr => arr * -1);
}

function mapToNoChange(array) {
  return array.map(arr => arr);
}

 function mapToDouble(array) {
  return array.map(arr => arr * 2);
}

 function mapToSquare(array) {
  return array.map(arr => arr ** 2);
 }

function reduceToTotal(array, startPoint = 0) {
  let total = (sum, val) => sum + val;
  return array.reduce(total, startPoint);
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