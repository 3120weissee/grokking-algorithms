const findGreater = (x, y) => {
  if(x > y) return x
  return y
}

const maxNumber = (array) => {
  if(array.length === 1)
    return array[0]

  return findGreater(array[0], maxNumber(array.slice(1)))
}

console.log(maxNumber([1,2,3,4,5]))
console.log(maxNumber([5,4,3,2,1]))
console.log(maxNumber([3,4,5,1,2]))