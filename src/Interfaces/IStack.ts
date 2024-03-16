interface IStack{
    push(data: any): void;
    pop(): void | INode;
    peek(): null | INode;
    isEmpty(): boolean;
    hasRoom(): boolean;
    printStack(): void;
}