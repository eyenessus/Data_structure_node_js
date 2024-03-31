

export class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
      }
      addEdge(vertex) {
        if (vertex instanceof Vertex) {
          this.edges.push(new Edge(this, vertex));
        } else {
          throw new Error("Edge start and end must both be Vertex");
        }
      }
      print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);
    
        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
      }
}

