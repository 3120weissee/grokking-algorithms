// Split a plot evenly into squares
// plot should be a rectangle

const findGreater = (x, y) => {
  if(x > y) return x
  return y
}

const findLesser = (x, y) => {
  if(x < y) return x
  return y
}

const findSquarePlots = (length, height) => {
  if(length === height)
    return length

  let bigger = findGreater(length, height)
  const lesser = findLesser(length, height)

  while(bigger > lesser) {
    bigger -= lesser
  }

  if(bigger === 0)
    return lesser

  return findSquarePlots(bigger, lesser)
}

console.log(findSquarePlots(1680, 640))