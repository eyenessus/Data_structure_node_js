import { NodeM } from "../Node/NodeM";

export class DoublyLinkedList {
    head:NodeM|null;
    tail:NodeM|null;
    
    constructor() {
        this.head = null;
        this.tail = null;
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