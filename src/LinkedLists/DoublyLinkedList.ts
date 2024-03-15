class DoublyLinkedList implements DoublyLinkedList{
  head: NodeM | null;
  tail: NodeM | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data: string) {
    const newHead:NodeM = new NodeM(data);
    const currentHead:NodeM|null = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data: string) {
    const newTail: NodeM = new NodeM(data);
    const currentTail = this.tail;

    if (currentTail && this.tail) {
      this.tail.setNextNode(newTail)
      newTail.setPreviousNode(currentTail);
    }
  }

  removeHead() {
    const removedHead: NodeM | null = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail: NodeM | null = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead()
    }
    return removedTail.data
  }

  printList() {
    let currentNode: NodeM | null = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}