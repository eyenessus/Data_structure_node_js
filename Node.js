class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
    setNextNode(node){
        this.next =node;
    }
}

let myFirstNode = new Node('Hello World, IM NODE');
let secondeNode = new Node('IM Second Node')

 myFirstNode.setNextNode(secondeNode);
console.log(myFirstNode)