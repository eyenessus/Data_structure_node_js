
/**
 * NODE
 */
const strawberryNode = new NodeM('Berry Tasty')
const vanillaNode = new NodeM('Vanilla')
const coconutNode = new NodeM('Coconuts for Coconut')

vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)

let currentNode: NodeM | null = vanillaNode

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


/**
 * Listas duplamente ligadas
 */



