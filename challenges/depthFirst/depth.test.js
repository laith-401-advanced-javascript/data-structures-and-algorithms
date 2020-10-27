'use strict';

let Depthfirst = require('./depthFirst');
let Vertex = require('../graph/graph').Vertex;

describe('test the graph', () => {


  const graph = new Depthfirst();


  const A = new Vertex('A');
  const B = new Vertex('B');
  const C = new Vertex('C');
  const D = new Vertex('D');
  const E = new Vertex('E');
  const F = new Vertex('F');
  const G = new Vertex('G');
  const H = new Vertex('H');

  graph.addVertex(A);
  graph.addVertex(B);
  graph.addVertex(C);
  graph.addVertex(D);
  graph.addVertex(E);
  graph.addVertex(F);
  graph.addVertex(G);
  graph.addVertex(H);

  graph.addDirectedEdge(A, D, 0);
  graph.addDirectedEdge(A, B, 0);
  graph.addDirectedEdge(B, C, 0);
  graph.addDirectedEdge(C, G, 0);
  graph.addDirectedEdge(D, H, 0);
  graph.addDirectedEdge(D, E, 0);
  graph.addDirectedEdge(H, F, 0);


  it('the bfs output', () => {
    expect(graph.dfs(A)).toString('["A", "B", "C", "G", "D", "E", "H", "F"]');

  });
});