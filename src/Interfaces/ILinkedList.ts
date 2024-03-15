interface ILinkedList{
    head: INode | null;
    addToHead(data: any): void;
    addToTail(data: any): void;
    removeHead(): INode | void;
    printList(): void;
}