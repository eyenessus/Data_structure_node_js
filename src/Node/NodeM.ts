export class NodeM {
    data : string
    next : NodeM | null
    previous : NodeM | null
    constructor(data:string) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node:NodeM|null) {
        if (node instanceof NodeM || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }
    setPreviousNode(node:NodeM|null) {
        if (node instanceof Node || node === null) {
          this.previous = node;
        } else {
          throw new Error('Previous node must be a member of the Node class')
        }
      }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
      }
}


