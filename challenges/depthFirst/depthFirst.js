'use strict';

let { Graph , Vertex } = require('../graph/graph');


class Depthfirst extends Graph {

  constructor() {
    super();
  }

  dfs(node) {
    if (node.value == null || node == undefined) {

      return 'wrong input';
    }

    let arr = [];
    let complete = [];
    arr.push(node);
    // complete.push(node.value)
    // let current;

    while (arr.length > 0) {
      let current = arr.pop();
      // console.log('cc',current)
      complete.push(current.value);
      let ni = this.getNeighbours(current);

      for (let k of ni) {
        // console.log('k', k.vertex);
        if (!arr.includes(k.vertex))
          arr.push(k.vertex);
      }
      console.log(arr);

    }
    return complete;

  }
}


const graph = new Depthfirst() ;

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


graph.addDirectedEdge(one,two ,'$20');
graph.addDirectedEdge(one,five);
graph.addDirectedEdge(two,four);
graph.addDirectedEdge(three,one);
graph.addDirectedEdge(four,five);
graph.addDirectedEdge(five,ten);

graph.addDirectedEdge(eliven,eliven);


console.log('>>',graph.dfs(four));


module.exports = Depthfirst;