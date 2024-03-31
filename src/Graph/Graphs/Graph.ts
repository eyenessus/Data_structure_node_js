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
      print() {
        this.vertices.forEach((vertex) => vertex.print());
      }
    }
    const trainNetwork = new Graph();
    let atlantaStation = trainNetwork.addVertex("Atlanta");
    let newYorkStation = trainNetwork.addVertex("New York");
    trainNetwork.print();
