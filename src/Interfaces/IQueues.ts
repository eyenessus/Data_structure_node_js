interface IQueues{
    enqueue(data:any):void;
    dequeue():void | INode;
    hasRoom():boolean;
    isEmpty():boolean;
}