
interface IDoublyLinkedList{
    head: INode | null;
    tail: INode | null;
    addToHead(data: string): void;
    addToTail(data: string): void;
    removeHead(): string | void;
    removeTail(): string | void;
    removeByData(data: string): INode | null;
}