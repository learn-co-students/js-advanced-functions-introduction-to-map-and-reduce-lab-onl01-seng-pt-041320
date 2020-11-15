// Your code here
function mapToNegativize(arr) {
    const negArr = [];
    for (const element of arr) {
        negArr.push(element * -1);
    } return negArr;
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(arr) {
    const doubleArr = [];
    for (const element of arr) {
        doubleArr.push(element * 2);
    } return doubleArr;
}


function mapToSquare(arr) {
    const sqArr = [];
    for (const element of arr) {
        sqArr.push(element * element);
    } return sqArr;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i=0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    } return total;
}

function reduceToAllTrue(arr) {
    for (const element of arr) {
        if (!element) {
            return false;
        }
    } return true;
}

function reduceToAnyTrue(arr) {
    for (const element of arr) {
        if (!!element) {
            return true;
        }
    } return false;
}