const factorial = (num) => {
  if(num === 1)
    return num
  return num * factorial(num-1)
}

console.log('1: ', factorial(1))
console.log('3: ', factorial(3))
console.log('5: ', factorial(5))