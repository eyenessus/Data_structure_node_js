import NodeM from "../Node/NodeM";

export class LinkedList implements ILinkedList{
  head: INode | null
  constructor() {
    this.head = null;
  }

  addToHead(data: string) {
    const newHead:INode = new NodeM(data);
    const currentHead:INode | null = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data: string) {
    let tail: INode | null = this.head;
    if (!tail) {
      this.head = new NodeM(data);
    } else {
      while (tail !== null && tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      if (tail !== null) {
        tail.setNextNode(new NodeM(data));
      }
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode: null | INode = this.head;
    let output: string = "<head> ";
    
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

