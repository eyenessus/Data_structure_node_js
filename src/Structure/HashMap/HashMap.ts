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
            linkedList.addToHead({ key, value });
            return;
        }

        let current: NodeM | null = linkedList.head;

        while (current) {

            if (current.data.key === key) {
                current.data = { key, value };
            }

            if (!current.getNextNode()) {
                const tail: NodeM = new NodeM({ key, value });
                current.setNextNode(tail);
                break;
            }
            current = current.getNextNode();
        }
    }
    retrieve(key: string) {
        const arrayIndex: number = this.hash(key);
        let current: NodeM | null = this.hashmap[arrayIndex].head;

        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.getNextNode()
        }
        return null
    }
}

/**
 * depois cria sondagem de colisão
 * intervalo de adicao que se caso ja existir um dado no tal indice ele procura entre um intervalo de 2 (exemplo) [3,0,0,1,0] //1 ja contem o valor entao ele pula duas casas e adiciona o valor 3 na proxima casa vazia
 */