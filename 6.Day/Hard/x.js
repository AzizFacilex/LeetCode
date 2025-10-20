function largestPathValue(colors, edges) {
    var directedNodes = [];
    for (var index = 0; index < edges.length; index++) {
        var origin_1 = edges[index][0];
        var dest = edges[index][1];
        if (!directedNodes[origin_1]) {
            directedNodes[origin_1] = new DirectedNode(origin_1, colors);
        }
        if (!directedNodes[dest]) {
            directedNodes[dest] = new DirectedNode(dest, colors);
        }
        directedNodes[origin_1].addEdge(directedNodes[dest]);
    }
    return 0;
}
var DirectedNode = /** @class */ (function () {
    function DirectedNode(origin, colors) {
        this.color = "";
        this.connectedNode = [];
        this.value = origin;
        this.color = colors[origin];
    }
    DirectedNode.prototype.addEdge = function (newNode) {
        this.connectedNode.push(newNode);
    };
    return DirectedNode;
}());
largestPathValue("abaca", [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
]);
