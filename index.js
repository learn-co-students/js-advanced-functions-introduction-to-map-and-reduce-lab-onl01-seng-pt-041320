function mapToNegativize(sourceArray){
  const negArr = [];
  for (const ind of sourceArray){
    negArr.push(ind * -1)
  }
  return negArr
  }


function mapToNoChange(sourceArray){
  return sourceArray
}

function mapToDouble(sourceArray){ 
  const newArr = [];
  for (const num of sourceArray){
    newArr.push(num * 2)
  }
  return newArr
}

function mapToSquare(sourceArray){
  const sqArr = [];
  for (const num of sourceArray){
    sqArr.push(num * num)
  }
  return sqArr
}

function reduceToTotal(arr, stPnt=0){
  let total = stPnt;
  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

function reduceToAllTrue(arr){
  for (const element of arr) {
    if (!element) {
        return false;
    }
} return true;
}

function reduceToAnyTrue(arr){
  for (const element of arr) {
    if (!!element) {
        return true;
    }
} return false;
}


