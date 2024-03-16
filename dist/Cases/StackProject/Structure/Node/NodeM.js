"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeM {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    setNextNode(node) {
        if (node) {
            this.next = node;
            return;
        }
        this.next = null;
    }
    setPreviousNode(node) {
        if (node) {
            this.previous = node;
            return;
        }
        this.previous = null;
    }
    getNextNode() {
        return this.next;
    }
    getPreviousNode() {
        return this.previous;
    }
}
exports.default = NodeM;
