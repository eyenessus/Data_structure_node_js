const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

export class Graph {

  constructor() {
    this.vertices = [];
  }
  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }
  addEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo);
      vertexTwo.addEdge(vertexOne);
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }


  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(e => e !== vertex)
  }
}
const trainNetwork = new Graph();
let atlantaStation = trainNetwork.addVertex("Atlanta");
let newYorkStation = trainNetwork.addVertex("New York");
trainNetwork.removeVertex(atlantaStation)
trainNetwork.print();
