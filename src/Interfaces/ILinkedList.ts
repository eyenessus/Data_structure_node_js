interface ILinkedList{
    head: INode | null;
    addToHead(data: string): void;
    addToTail(data: string): void;
    removeHead(): string | void;
    printList(): void;
}