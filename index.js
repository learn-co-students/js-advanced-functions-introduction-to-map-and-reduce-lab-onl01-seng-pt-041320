// Your code here

// returns an array with all values made negative
function mapToNegativize(sourceArray)
{
    let negativizedNumbersArray = [];

    for (let element of sourceArray)
    {
        negativizedNumbersArray.push(element * -1);
    }

    return negativizedNumbersArray;
}

// returns an array with the original values
function mapToNoChange(sourceArray)
{
    let noChangeArray = [];

    for (let element of sourceArray)
    {
        noChangeArray.push(element);
    }

    return noChangeArray;
}

// returns an array with the original values multiplied by 2
function mapToDouble(sourceArray)
{
    let doubledNumberArray = [];

    for (let element of sourceArray)
    {
        doubledNumberArray.push(element * 2);
    }

    return doubledNumberArray
}

// returns an array with the original values squared
function mapToSquare(sourceArray)
{
    let squaredNumberArray = [];

    for (let element of sourceArray)
    {
        squaredNumberArray.push(element ** 2);
    }

    return squaredNumberArray;
}

// returns a running total when not given a starting point and a running total when given a starting point
function reduceToTotal(sourceArray, startingPoint = 0)
{
    for (let element of sourceArray)
    {
        startingPoint += element;
    }

    return startingPoint;
}

// returns true when all values are truthy and false when any value is falsy
function reduceToAllTrue(sourceArray)
{
    for (let element of sourceArray)
    {
        if (!element)
        {
            return false;
        }
    }

    return true;
}

// returns true when a true value is present and false when no true value is present
function reduceToAnyTrue(sourceArray)
{
    for (let element of sourceArray)
    {
        if (element)
        {
            return true;
        }
    }

    return false;
}