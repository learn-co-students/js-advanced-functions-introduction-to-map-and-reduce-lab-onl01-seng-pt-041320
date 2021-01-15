// Your code here

function mapToNegativize(sourceArray) {
  const newArray = sourceArray.map(x => x * -1);
  return newArray;
}

function mapToNoChange(sourceArray) {
  //   const newArray = sourceArray.map();
  return sourceArray;
}

function mapToDouble(sourceArray) {
  const newArray = sourceArray.map(x => x * 2);
  return newArray;
}

function mapToSquare(sourceArray) {
  const newArray = sourceArray.map(x => x * x);
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (startingPoint) {
    return sourceArray.reduce(reducer, startingPoint);
  } else {
    return sourceArray.reduce(reducer);
  }
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      continue;
    } else {
      return true;
    }
  }
  return false;
}
