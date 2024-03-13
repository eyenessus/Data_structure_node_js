class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let myFirstNode = new Node('Hello World, IM NODE');
console.log(myFirstNode.data);