interface ILinkedList{
    head: INode | null;
    addToHead(data: any): void;
    addToTail(data: any): void;
    removeHead(): string | void;
    printList(): void;
}