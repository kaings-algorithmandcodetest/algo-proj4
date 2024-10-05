class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    return this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v.node !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
      (v) => v.node !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distance = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let nextNode = neighbor;

          let ttlWeight = distance[smallest] + nextNode.weight;
          let nodeName = nextNode.node;

          if (ttlWeight < distance[nodeName]) {
            distance[nodeName] = ttlWeight;
            previous[nodeName] = smallest;

            nodes.enqueue(nodeName, ttlWeight);
          }
        }
      }
    }

    console.log("nodes", nodes);
    console.log("distances", distance);
    console.log("previous", previous);
    console.log("path", path);

    return path.concat(smallest).reverse();
  }
}

// execution
const wg = new WeightedGraph();
wg.addVertext("A");
wg.addVertext("B");
wg.addVertext("C");
wg.addVertext("D");
wg.addVertext("E");
wg.addVertext("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

// console.log(JSON.stringify(wg));

console.log(wg.dijkstra("A", "E"));
