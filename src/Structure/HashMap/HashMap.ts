import { LinkedList } from "../List/LinkedLists";
import NodeM from "../Node/NodeM";

export default class HashMap implements IHashMap {
    hashmap: Array<ILinkedList>;

    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null)
            .map(() => new LinkedList());
    }

    hash(key: string) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }

    assign(key: string, value: any) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];

        if (linkedList.head === null) {
            linkedList.addToHead({ key: key, value: value });
            return;
        }
    }

    retrieve(key: string) {
        const arrayIndex = this.hash(key)
        return this.hashmap[arrayIndex];
    }
}