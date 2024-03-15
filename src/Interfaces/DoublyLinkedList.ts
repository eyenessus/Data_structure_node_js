interface DoublyLinkedList{
    head: INode | null;
    tail: INode | null;
    addToHead(data: string): void;
    addToTail(data: string): void;
    removeHead(): string | undefined;
    removeTail(): string | undefined;
}