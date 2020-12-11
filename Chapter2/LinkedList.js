class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.start = null
  }

  addNode(newNode) {
    let listNode = this.start
    if(listNode === null) {
      this.start = newNode
      return
    }

    while(listNode.next !== null) {
      listNode = listNode.next
    }

    listNode.next = newNode

    return this.start;
  }

  delete(nodeValue, comparison) {
    if(!comparison) {
      comparison = (nodeValue, listValue) => nodeValue === listValue
    }

    let currentNode = this.start
    let nextNode = currentNode.next

    if(comparison(nodeValue, currentNode.value)) {
      this.start = nextNode
      currentNode.next = null
      return
    }

    let prevNode = currentNode
    currentNode = prevNode.next
    nextNode = currentNode.next

    while(!comparison(nodeValue, currentNode.value)) {
      prevNode = currentNode
      currentNode = nextNode
      nextNode = currentNode.next
    }

    prevNode.next = nextNode
    currentNode.next = null
  }

  print(cb) {
    if(!cb) {
      cb = (el) => el
    }
    let listNode = this.start
    let result = ''
    while(listNode !== null) {
      result += `-${cb(listNode.value)}\n`
      listNode = listNode.next
    }

    return result
  }
}

exports.ListNode = ListNode
exports.LinkedList = LinkedList

// const ll = new LinkedList()
// ll.addNode(new ListNode(0))
// ll.addNode(new ListNode(1))
// ll.addNode(new ListNode(2))
// ll.addNode(new ListNode(3))
// ll.addNode(new ListNode(4))
// console.log(ll.print())
//
// ll.delete(0)
// ll.delete(1)
// ll.delete(2)
// ll.delete(3)
// ll.delete(4)
// console.log(ll.print())