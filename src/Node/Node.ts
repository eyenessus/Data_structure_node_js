import NodeM from "./NodeM"

const strawberryNode = new NodeM('Berry Tasty')
const vanillaNode = new NodeM('Vanilla')
const coconutNode = new NodeM('Coconuts for Coconut')

vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)

let currentNode: INode | null = vanillaNode

while (currentNode !== null) {
    currentNode = currentNode.getNextNode()
}