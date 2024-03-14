export class NodeM {
    data : string
    next : NodeM | null

    constructor(data:string) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node:NodeM) {
        if (node instanceof NodeM || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }

    getNextNode() {
        return this.next;
    }
}


