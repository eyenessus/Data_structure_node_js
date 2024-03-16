"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedLists_1 = require("../List/LinkedLists");
class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedLists_1.LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }
    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        }
        else {
            console.log('Stack is empty');
        }
    }
    push(data) {
        if (this.hasRoom()) {
            this.size++;
            this.stack.addToHead(data);
        }
        else {
            throw new Error('Stack is full');
        }
    }
    peek() {
        var _a;
        if (!this.isEmpty()) {
            return (_a = this.stack.head) === null || _a === void 0 ? void 0 : _a.data;
        }
        else {
            return null;
        }
    }
    isEmpty() {
        if (this.size === 0) {
            return true;
        }
        return false;
    }
    hasRoom() {
        if (this.size < this.maxSize) {
            return true;
        }
        return false;
    }
    printStack() {
        throw new Error("Method not implemented.");
    }
}
exports.default = Stack;
