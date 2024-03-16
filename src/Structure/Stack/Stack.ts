import { LinkedList } from "../List/LinkedLists";

export default class Stack implements IStack {
    maxSize: number;
    stack: LinkedList;
    size: number;

    constructor(maxSize: number = Infinity) {
        this.stack = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            console.log('Stack is empty');
        }
    }

    push(data: any) {
        if (this.hasRoom()) {
            this.size++;
            this.stack.addToHead(data);
        } else {
            throw new Error('Stack is full')
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.stack.head?.data;
        } else {
            return null;
        }
    }
    isEmpty(): boolean {
       if(this.size === 0) {
           return true;
       }
       return false;
    }
    hasRoom(): boolean {
        if (this.size < this.maxSize) {
            return true;
        }
        return false;
    }
    printStack(): void {
        throw new Error("Method not implemented.");
    }

}