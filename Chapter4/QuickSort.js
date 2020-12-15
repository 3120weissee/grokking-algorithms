const quickSort = (array) => {
  if(array.length <= 1)
    return array

  const pivot = array[0]
  const lowerArray = []
  const upperArray = []
  array.slice(1).forEach((item) => {
    if(item < pivot) {
      lowerArray.push(item)
    }
    else {
      upperArray.push(item)
    }
  })

  return quickSort(lowerArray).concat([pivot]).concat(quickSort(upperArray))
}

console.log(quickSort([5, 8, 9, 1, 4, 7, 6, 2, 3]))
console.log(quickSort([1,2,1,2,1,2]))