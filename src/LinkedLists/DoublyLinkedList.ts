class DoublyLinkedList implements IDoublyLinkedList {
  head: NodeM | null;
  tail: NodeM | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data: string) {
    const newHead: NodeM = new NodeM(data);
    const currentHead: NodeM | null = this.head;
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

  removeByData(data: string) {
    let nodeToRemove: NodeM | undefined;
    let currentNode: NodeM | null = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode: NodeM|null= nodeToRemove.getNextNode();
      const previousNode: NodeM|null = nodeToRemove.getPreviousNode();
      
      if(nextNode && previousNode){
        nextNode.setPreviousNode(previousNode);
        previousNode.setNextNode(nextNode);
      }
    }
    return nodeToRemove;
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