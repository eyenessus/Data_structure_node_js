import { LinkedList } from "../List/LinkedLists";

export default class Queue implements IQueues {
    queue: ILinkedList;
    size: number;
    maxSize: number;

    constructor(maxSize: number = Infinity) {
        this.queue = new LinkedList()
        this.size = 0
        this.maxSize = maxSize
    }

    enqueue(data: any) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
            console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
        } else {
            throw new Error("Queue is full!")
        }
    }


    dequeue() {
        if (!this.isEmpty()) {
            const data: INode | void = this.queue.removeHead();
            this.size--;
            console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
            return data;
        } else {
            throw new Error("Queue is empty!");
        }
    }

    hasRoom() {
        if (this.size < this.maxSize) {
            return true
        }
        return false
    }

    isEmpty() {
        if (!this.size) {
            return true
        }
        return false
    }
}


