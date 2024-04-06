import Queue from "../../Structure/Queues/Queues";
import { Graph } from "../Graphs/Graph";
import { Vertex } from "../Graphs/Vertex";

// const simpleGraph = new Graph(true, false);
// const startNode = simpleGraph.addVertex('v0.0.0');
// const v1 = simpleGraph.addVertex('v1.0.0');
// const v2 = simpleGraph.addVertex('v2.0.0');

// const v11 = simpleGraph.addVertex('v1.1.0');
// const v12 = simpleGraph.addVertex('v1.2.0');
// const v21 = simpleGraph.addVertex('v2.1.0');

// const v111 = simpleGraph.addVertex('v1.1.1');
// const v112 = simpleGraph.addVertex('v1.1.2');
// const v121 = simpleGraph.addVertex('v1.2.1');
// const v211 = simpleGraph.addVertex('v2.1.1');

// simpleGraph.addEdge(startNode, v1);
// simpleGraph.addEdge(startNode, v2);

// simpleGraph.addEdge(v1, v11);
// simpleGraph.addEdge(v1, v12);
// simpleGraph.addEdge(v2, v21);

// simpleGraph.addEdge(v11, v111);
// simpleGraph.addEdge(v11, v112);
// simpleGraph.addEdge(v12, v121);
// simpleGraph.addEdge(v21, v211);


const breadthFirstTraversal = (start:Vertex) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    })
  }

};

breadthFirstTraversal(simpleGraph.vertices[0]);
