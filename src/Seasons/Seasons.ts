/**
 * NODE
 */
const strawberryNode = new Node('Berry Tasty')
const vanillaNode = new Node('Vanilla')
const coconutNode = new Node('Coconuts for Coconut')

vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)

let currentNode = vanillaNode

while (currentNode !== null) {
    currentNode = currentNode.getNextNode()
}


/**
 * Listas ligada
 */
const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer')
seasons.addToHead('spring')
seasons.printList();

seasons.addToTail('fall')
seasons.addToTail('winter')
seasons.printList();

seasons.removeHead()
seasons.printList();





