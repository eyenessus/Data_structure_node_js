import NodeM from "../../Structure/Node/NodeM";

class TreeNode {
  data: any;
  children: TreeNode[];

  constructor(data: any) {
    this.data = data;
    this.children = []
  }
  addChild(child: NodeM | any) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }
  removeChild(childToRemove: any | NodeM) {
    const length = this.children.length;

    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child;
      } else {
        return child.data !== childToRemove;
      }
    });

    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove));
    }
  }
  depthFirstTraversal() {//travessia em profundidade
    console.log(this.data);
    this.children.forEach(child => child.depthFirstTraversal());
  }
  breadthFirstTraversal() {
    let queue = [this];
    while (queue.length > 0) {
      const current: NodeM | any = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
  /*
  O código selecionado é um método chamado broadthFirstTraversal dentro da classe TreeNode. Este método realiza uma travessia de pesquisa em largura de uma estrutura em árvore.

Veja como funciona:

Inicializa uma fila com o nó raiz da árvore.
Ele entra em um loop while que continua enquanto houver nós na fila.
Dentro do loop, ele remove o primeiro nó da fila usando o método shift e o atribui à variável atual.
Em seguida, imprime a propriedade data do nó atual.
Por fim, adiciona todos os filhos do nó atual ao final da fila usando o método concat.
Ao realizar esse percurso, o método visita cada nó da árvore nível por nível, começando pela raiz e descendo até as folhas.

Este método é útil para tarefas que exigem visitar todos os nós de uma árvore de maneira ampla, como pesquisar um valor específico ou imprimir o conteúdo da árvore de forma estruturada.

Chamando esse método em um objeto TreeNode, você pode observar o percurso em largura da árvore. *
*/

}