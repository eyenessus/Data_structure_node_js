import { LinkedList } from "../List/LinkedLists";

export default class Queue implements IQueues {
    queue: ILinkedList;
    size: number;
    constructor() {
        this.queue = new LinkedList()
        this.size = 0
    }

    enqueue(data: any) {
        this.queue.addToTail(data)
        this.size++;
        console.log(`Added ${data}! Queue size is now ${this.size}.`);
    }


    dequeue() {
        const data = this.queue.removeHead()
        this.size--;
        console.log(`Removed ${data}! Queue size is now ${this.size}.`);
        return data;
    }
}


