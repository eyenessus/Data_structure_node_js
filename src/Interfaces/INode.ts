interface INode{
    data: string;
    next: INode | null;
    previous: INode | null;
    setNextNode(node: INode | null): void;
    setPreviousNode(node: INode | null): void;
    getNextNode(): INode | null;
    getPreviousNode(): INode | null;
}