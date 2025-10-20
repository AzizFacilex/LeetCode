function largestPathValue(colors: string, edges: number[][]): number {
  let directedNodes: DirectedNode[] = [];
  for (let index = 0; index < edges.length; index++) {
    let origin = edges[index][0];
    let dest = edges[index][1];
    if (!directedNodes[origin]) {
      directedNodes[origin] = new DirectedNode(origin,colors);
    }
    if (!directedNodes[dest]) {
      directedNodes[dest] = new DirectedNode(dest,colors);
    }
    directedNodes[origin].addEdge(directedNodes[dest]);
  }
  
  return 0;
}

class DirectedNode {
  value: number;
  color: string = "";
  connectedNode: DirectedNode[] = [];
  constructor(origin: number, colors:string) {
    this.value = origin;
    this.color = colors[origin]
   
  }
  addEdge(newNode: DirectedNode) {
    this.connectedNode.push(newNode);
  }
}

largestPathValue("abaca", [
  [0, 1],
  [0, 2],
  [2, 3],
  [3, 4],
]);
