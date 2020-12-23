const pianoGraph = {
  book: [
    ['rare_lp', 5],
    ['poster', 0]
  ],
  rare_lp: [
    ['bass_guitar', 15],
    ['drum_set', 20]
  ],
  poster: [
    ['drum_set', 35],
    ['bass_guitar', 30]
  ],
  drum_set: [
    ['piano', 10]
  ],
  bass_guitar: [
    ['piano', 20]
  ],
  piano: []
}

const setupResults = (graph, startNode) => {
  const results = Object.keys(graph).reduce((result, item) => {
    result[item] = {
      parent: null,
      length: Infinity
    }
    return result
  }, {})

  delete results[startNode]

  graph[startNode].forEach((item) => {
    const itemName = item[0]
    const itemLength = item[1]

    results[itemName].parent = startNode
    results[itemName].length = itemLength
  })

  return results
}

const getShortestNode = (resultsSet, checked) =>
  Object.keys(resultsSet).reduce((shortest, item, idx) => {
    if(checked[item] || (shortest && resultsSet[item].length > resultsSet[shortest].length)) {
      return shortest
    }

    return item
  }, null)

const updateResults = (node, graph, results) => {
  graph[node].forEach((item) => {
    const itemName = item[0]
    const itemLength = item[1]
    const totalLength = results[node].length + itemLength

    if(results[itemName].length > totalLength) {
      results[itemName].parent = node
      results[itemName].length = totalLength
    }
  })
}

const buildPath = (resultsSet, endNode) => {
  let pathString = ' -> ' + endNode
  let currentNode = endNode
  while(resultsSet[currentNode]) {
    pathString = ' -> ' + resultsSet[currentNode].parent + pathString
    currentNode = resultsSet[currentNode].parent
  }
  return pathString
}

const findBestPath = (startNode, endNode, graph) => {
  const results = setupResults(graph, startNode)
  const checked = {}

  let currentNode = getShortestNode(results, checked)
  while(currentNode) {
    updateResults(currentNode, graph, results)
    checked[currentNode] = true
    currentNode = getShortestNode(results, checked)
  }

  return buildPath(results, endNode)
}

const testOne = {
  a: [
    ['b', 5],
    ['c', 2]
  ],
  b: [
    ['d', 4],
    ['e', 2]
  ],
  c: [
    ['b', 8],
    ['e', 7]
  ],
  d: [
    ['e', 6],
    ['f', 7]
  ],
  e: [
    ['f', 1]
  ],
  f: []
}

const testTwo = {
  a: [
    ['b', 10]
  ],
  b: [
    ['c', 20]
  ],
  c: [
    ['d', 1],
    ['e', 30]
  ],
  d: [
    ['b', 1]
  ],
  e: []
}

console.log(findBestPath('book', 'piano', pianoGraph))
console.log(findBestPath('a', 'f', testOne))
console.log(findBestPath('a', 'e', testTwo))