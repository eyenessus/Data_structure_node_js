"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const NodeM_1 = __importDefault(require("../Node/NodeM"));
class LinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(data) {
        const newHead = new NodeM_1.default(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }
    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new NodeM_1.default(data);
        }
        else {
            while (tail !== null && tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            if (tail !== null) {
                tail.setNextNode(new NodeM_1.default(data));
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
        let currentNode = this.head;
        let output = "<head> ";
        while (currentNode !== null) {
            output += currentNode.data + " ";
            currentNode = currentNode.getNextNode();
        }
        output += "<tail>";
        console.log(output);
    }
}
exports.LinkedList = LinkedList;
