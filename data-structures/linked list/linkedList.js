// linked list has head and tail
// to begin the tail pointing to head

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  insert(value) {
    let currentNode = this.node(value);
    if (this.head === null) {
      this.head = currentNode;
      this.tail = currentNode;
    } else {
      this.tail.next = currentNode;
      this.tail = currentNode;
    }
  }

  remove(value) {
    const currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  removeTail() {
    const findTail = (currentNode, tail) => {
      if (currentNode.next === tail) {
        return currentNode;
      } else {
        return findTail(currentNode.next, tail);
      }
    };

    let foundNode = findTail(this.head, this.tail);
    foundNode.next = null;
    this.tail = foundNode;
  }

  node(value) {
    let node = {};
    node.value = value;
    node.next = null;

    return node;
  }
}

const myList = new LinkedList();
myList.insert(1);
myList.insert(2);
myList.insert(3);
// console.log(myList.remove(2));
