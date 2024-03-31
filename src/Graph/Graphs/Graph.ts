import { Vertex } from "./Vertex";


export class Graph {
  isWeighted:boolean;
  vertices: Vertex[] = [];

  constructor(isWeighted=false) {
    this.vertices = [];
    this.isWeighted = isWeighted
  }
  addVertex(data:string) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }
  addEdge(vertexOne:Vertex, vertexTwo:Vertex, weight:number) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      vertexTwo.addEdge(vertexOne, edgeWeight);
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }
  removeEdge(vertexOne:Vertex, vertexTwo:Vertex){
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
         vertexOne.removeEdge(vertexTwo);
         vertexTwo.removeEdge(vertexOne);
       } else {
         throw new Error('Expected Vertex arguments.');
       }
   }

  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }

  removeVertex(vertex:Vertex) {
    this.vertices = this.vertices.filter(e => e !== vertex)
  }
}
const trainNetwork = new Graph(true);
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.addEdge(atlantaStation, newYorkStation, 800);

trainNetwork.print();
