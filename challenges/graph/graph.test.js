'use strict';
const { Graph, Vertex } = require('../graph/graph');

describe('Graph ', () => {

  const graph = new Graph();

  const four = new Vertex(4);
  const five = new Vertex(5);
  const two = new Vertex(2);
  const one = new Vertex(1);


  it('Node can be successfully added to the graph', () => {
    graph.addVertex(one);

    expect(graph._adjacencyList.has(one)).toBeTruthy();
  });


  it('An edge can be successfully added to the graph', () => {
    graph.addDirectedEdge(one, two);
    expect(graph._adjacencyList.entries()).toBeTruthy();
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    expect(graph.printAll()).toBeTruthy();
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addDirectedEdge(four, five);
    expect(graph.getNeighbours(four)[0].vertex.value).toBe(5);
  });


  it('The proper size is returned, representing the number of nodes in the graph ', () => {
    expect(graph.allSize()).toBe(3);

  });


  it('A graph with only one node and edge can be properly returned ', () => {
    const newGraph = new Graph();
    const twanty = new Vertex(20);
    newGraph.addVertex(twanty);
    graph.addDirectedEdge(twanty, twanty);

    expect(newGraph._adjacencyList.entries()).toBeTruthy();

  });


  it('An empty graph properly returns null', () => {
    const newGraph2 = new Graph();
            
    expect(newGraph2.allSize()).toBe(null);

  });

});