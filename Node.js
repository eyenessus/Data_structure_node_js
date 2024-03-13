class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
    setNextNode(node){
        if(node instanceof Node || node === null){
        this.next =node;
        }else{
            throw new Error('Next node must be a member of the Node class');
        }
    }
    getNextNode(){
        return this.next;
    }
}

let myFirstNode = new Node('Hello World, IM NODE');
let secondeNode = new Node('IM Second Node')

 myFirstNode.setNextNode(secondeNode);
 console.log(myFirstNode.getNextNode())