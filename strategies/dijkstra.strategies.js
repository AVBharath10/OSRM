const graphService = require('../services/graph.service');

class DijkstraStrategy {
  findShortestPath(start, end) {
    const distances = {};
    const prev = {};
    const vis = new Set();

    // Initialize
    Object.keys(graphService.graph.nodes).forEach(node => {
      distances[node] = Infinity;
      prev[node] = null;
    });

    distances[start] = 0;

    while (true) {
      let curr = null;
      let mindist = Infinity;

      // Find node with smallest distance
      for (let node in distances) {
        if (!vis.has(node) && distances[node] < mindist) {
          mindist = distances[node];
          curr = node;
        }
      }

      // Stop conditions
      if (curr === null) break;
      if (curr === end) break;

      vis.add(curr);

      const neighbors = graphService.getNeighbors(curr);

      for (let neighbor of neighbors) {
        const newDist = distances[curr] + neighbor.weight;

        if (newDist < distances[neighbor.to]) {
          distances[neighbor.to] = newDist;
          prev[neighbor.to] = curr;
        }
      }
    }

    // Reconstruct path
    const path = [];
    let curr = end;

    while (curr) {
      path.unshift(curr);
      curr = prev[curr];
    }

    return {
      distance: distances[end],
      path
    };
  }
}

module.exports = DijkstraStrategy;