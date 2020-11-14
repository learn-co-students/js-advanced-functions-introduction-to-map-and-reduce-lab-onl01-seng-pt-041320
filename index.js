// Your code here
function mapToNegativize(sourceArray){
  let newArr = []
  sourceArray.forEach((i)=>{
    newArr.push(i*-1)
  })
  return newArr
}

function mapToNoChange(sourceArray){
  let newArr = []
  sourceArray.forEach((i)=>{
    newArr.push(i)
  })
  return newArr
}

function mapToDouble(sourceArray){
  let newArr = []
  sourceArray.forEach((i)=>{
    newArr.push(i*2)
  })
  return newArr
}

function mapToSquare(sourceArray){
  let newArr = []
  sourceArray.forEach((i)=>{
    newArr.push(i*i)
  })
  return newArr
}

function reduceToTotal(sourceArray, startingPoint = 0){
  let total = startingPoint
  sourceArray.forEach((i)=>{
    total += i
  })
  return total
}

function reduceToAllTrue(sourceArray){
  let boolean = true
  sourceArray.forEach((i)=>{
    if(!i){
      return boolean = false
    }
  })
  return boolean
}

function reduceToAnyTrue(sourceArray){
  let boolean = false
  sourceArray.forEach((i)=>{
    if(i){
      return boolean = true
    }
  })
  return boolean
}