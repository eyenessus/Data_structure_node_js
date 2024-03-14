class DoublyLinkedList {
    head:NodeM|null;
    tail:NodeM|null;
    
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(data:string){
        const newHead = new NodeM(data);
        const currentHead = this.head;
        if (currentHead) {
          currentHead.setPreviousNode(newHead);
          newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
          this.tail = newHead;
        }
    }
    addToTail(data:string){
        const newTail = new NodeM(data);
        const currentTail = this.tail;

        if (currentTail && this.tail) {
          this.tail.setNextNode(newTail)
          newTail.setPreviousNode(currentTail);
        }
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}