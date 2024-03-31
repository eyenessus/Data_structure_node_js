import { Vertex } from "./Vertex";

export class Edge {
    start:Vertex;
    end:Vertex;
    weight:number|null;
    constructor(start:Vertex, end:Vertex, weight:number|null) {
      this.start = start;
      this.end = end;
      this.weight = weight;
    }
  }
  