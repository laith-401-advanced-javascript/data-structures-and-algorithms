'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}


class Edge {
  constructor(vertex, wight = 0) {
    this.vertex = vertex;
    this.wight = wight;
  }
}



class Graph {
  constructor() {

    this._adjacencyList = new Map();
  }


  // to add a new  vertex (node)  
  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);

  }

  addDirectedEdge(startVertex, endVertex, weight) {

    if (this._adjacencyList.has(startVertex) || this._adjacencyList.has(endVertex)) {
      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    } else {
      console.log(' Vertex not Found !! ');
    }
  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log('Vertex does not exist');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  printAll() {
    for(const [vertex, edge] of this._adjacencyList.entries()){
      // console.log("V >>>",vertex);
      // console.log("E >>>", edge);
      return vertex , edge ;
    }
  }

  // get all the size of the graph 
  allSize() {
    if(this._adjacencyList.size){
      return this._adjacencyList.size;
    }
    else{ 
      return null;
    }
  }


}

const graph = new Graph() ;

const four = new Vertex(4);
const five = new Vertex(5);
const two = new Vertex(2);
const three = new Vertex(3);
const one = new Vertex(1);
const ten = new Vertex(10);
const eliven = new Vertex(11);

graph.addVertex(one);
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(four);
graph.addVertex(five);
graph.addVertex(ten);
graph.addVertex(eliven);


graph.addDirectedEdge(one,two);
graph.addDirectedEdge(one,five);
graph.addDirectedEdge(two,four);
graph.addDirectedEdge(three,one);
graph.addDirectedEdge(four,five);
graph.addDirectedEdge(five,ten);

graph.addDirectedEdge(eliven,eliven);



// graph.getNeighbours(three)[0].vertex.value
// console.log('***',graph.getNeighbours(three)[0].vertex.value);

// console.log('***',graph.allSize());

// console.log('***',graph.printAll());

// console.log("Graph >> ",graph);ize

// graph.printAll();


module.exports = { Graph , Vertex , Edge } ;