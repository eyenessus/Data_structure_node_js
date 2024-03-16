"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedLists_1 = require("../List/LinkedLists");
class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedLists_1.LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }
    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
            console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
        }
        else {
            throw new Error("Queue is full!");
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
            return data;
        }
        else {
            throw new Error("Queue is empty!");
        }
    }
    hasRoom() {
        if (this.size < this.maxSize) {
            return true;
        }
        return false;
    }
    isEmpty() {
        if (!this.size) {
            return true;
        }
        return false;
    }
}
exports.default = Queue;
