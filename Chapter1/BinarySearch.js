const testData = [0,1,2,3,4,5,6,7,8,9]

const binarySearch = (data, elementToFind) => {
  const searchIdx = Math.floor(data.length / 2)

  if(elementToFind === data[searchIdx]) {
    return data[searchIdx]
  }

  if(elementToFind > data[searchIdx]) {
    return binarySearch(data.slice(searchIdx), elementToFind)
  }

  if(elementToFind < data[searchIdx]) {
    return binarySearch(data.slice(0, searchIdx), elementToFind)
  }
}

testData.forEach((data) => {
  console.log(data, binarySearch(testData, data))
})