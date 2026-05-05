const DijkstraStrategy = require('../strategies/dijkstra.strategy');

class RoutingService {
  constructor() {
    this.strategy = new DijkstraStrategy();
  }

  getRoute(from, to) {
    return this.strategy.findShortestPath(from, to);
  }
}

module.exports = new RoutingService();