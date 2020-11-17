function mapToNegativize(sourceArray) {
  let arrayNumbers = [];
  for (let index = 0; index < sourceArray.length; index++) {
    arrayNumbers.push(sourceArray[index] * -1);
  }
  return arrayNumbers;
}

function mapToNoChange(sourceArray) {
  let arrayNumbers = [];
  for (let index = 0; index < sourceArray.length; index++) {
    arrayNumbers.push(sourceArray[index]);
  }
  return arrayNumbers;
}

function mapToDouble(sourceArray) {
  let arrayNumbers = [];
  for (let index = 0; index < sourceArray.length; index++) {
    arrayNumbers.push(sourceArray[index] * 2);
  }
  return arrayNumbers;
}

function mapToSquare(sourceArray) {
  let arrayNumbers = [];
  for (let index = 0; index < sourceArray.length; index++) {
    arrayNumbers.push(sourceArray[index] * sourceArray[index]);
  }
  return arrayNumbers;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  for (let index = 0; index < sourceArray.length; index++) {
    total = total + sourceArray[index];
  }
  return total;
}

function reduceToAllTrue(sourceArray) {
  for (let index = 0; index < sourceArray.length; index++) {
    if (!sourceArray[index]) return false;
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let index = 0; index < sourceArray.length; index++) {
    if (sourceArray[index]) return true;
  }
  return false;
}
