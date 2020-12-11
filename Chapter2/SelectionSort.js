const { ListNode, LinkedList } = require('./LinkedList')

const playlist = new LinkedList()
playlist.addNode(new ListNode({
  band: 'RadioHead',
  playCount: 156
}))
playlist.addNode(new ListNode({
  band: 'Kishore Kumar',
  playCount: 141
}))
playlist.addNode(new ListNode({
  band: 'The Black Keys',
  playCount: 35
}))
playlist.addNode(new ListNode({
  band: 'Neutral Milk Hotel',
  playCount: 94
}))
playlist.addNode(new ListNode({
  band: 'Beck',
  playCount: 88
}))
playlist.addNode(new ListNode({
  band: 'The Strokes',
  playCount: 61
}))
playlist.addNode(new ListNode({
  band: 'Wilco',
  playCount: 111
}))

const sort = (firstNode, secondNode) => {
  if(firstNode.value.playCount > secondNode.value.playCount) return 1
  if(secondNode.value.playCount > firstNode.value.playCount) return -1
  return 0
}

const search = (bandNode, listValue) => bandNode.value.band === listValue.band

const print = (node) => `${node.band}: ${node.playCount}`

const selectionSort = (list, sortComparison, deleteComparison) => {
  const sortedList = new LinkedList()

  while(list.start !== null) {
    let highestNode = list.start
    let currentNode = highestNode.next

    while(currentNode !== null) {
      if(sortComparison(highestNode, currentNode) === -1) {
        highestNode = currentNode
      }
      currentNode = currentNode.next
    }

    list.delete(highestNode, deleteComparison)
    sortedList.addNode(highestNode)
  }

  return sortedList
}

console.log('Sorted List\n', selectionSort(playlist, sort, search).print(print))