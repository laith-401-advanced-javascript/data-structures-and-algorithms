const getEdges = require('./get-edge');
const { Graph, Vertex } = require('../graph/graph.js');

describe('`getEdges` function', () => {

    const graph = new Graph();

    const pandora = new Vertex('pandora');
    const narina = new Vertex('narina');
    const arendella = new Vertex('arendella');
    const naboo = new Vertex('naboo');

    graph.addVertex(pandora);
    graph.addVertex(narina);
    graph.addVertex(arendella);
    graph.addVertex(naboo);


    graph.addDirectedEdge(pandora, narina, 20);
    graph.addDirectedEdge(pandora, arendella, 40);
    graph.addDirectedEdge(arendella, naboo, 70);
    graph.addDirectedEdge(naboo, pandora, 100);



    it('should give a falsy response to a one-node graph argument', () => {
        let arr = [pandora, narina]

        const result = getEdges(graph, arr);

        const expected = "true  20 ";
        expect(result).toEqual(expected);
    });
    it('should give a falsy response to a non-graph argument', () => {

        let arr = [arendella, narina]

        const result = getEdges(graph, arr);

        const expected = false;
        expect(result).toEqual(expected);
    });

    //   it('should give a falsy response to an empty array argument', () => {
    //     // const graph = new Graph();

    //     const result = getEdges(graph, arr);
    //     const expected = [false, 0];
    //     expect(result).toEqual(expected);
    //   });


});