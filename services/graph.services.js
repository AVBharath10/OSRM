const fs = require('fs');

class GraphService {
  constructor() {
    const raw = fs.readFileSync('./src/data/graph.json');
    this.graph = JSON.parse(raw);
  }

  getNeighbors(nodeId) {
    return this.graph.edges[nodeId] || [];
  }

  getNode(nodeId) {
    return this.graph.nodes[nodeId];
  }
}

module.exports = new GraphService();