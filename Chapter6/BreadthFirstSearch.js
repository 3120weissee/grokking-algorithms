const breadthFirstSearch = (graph, startNode, checkCondition) => {
  const queue = graph[startNode].slice()
  const checked = {}

  while(queue.length !== 0) {
    const current = queue.shift()

    if(checked[current]) {
      queue.shift()
      continue
    }

    if(checkCondition(current)) {
      return current
    }

    queue.push(...graph[current])
    checked[current] = true
  }

  return 'Not Found'
}

const friendMap = {
  jack: ['bob', 'linda', 'tina'],
  bob: ['gene', 'louise'],
  linda: ['louise'],
  tina: ['fishoder', 'jimmy'],
  gene: [],
  louise: [],
  fishoder: [],
  jimmy: []
}

const findMangoSeller = (name) => ['jimmy'].find((n) => n === name)

console.log(breadthFirstSearch(friendMap, 'jack', findMangoSeller))