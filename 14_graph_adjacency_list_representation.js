class Graph {
    constructor() {
        this.adjList = {};
    };

    addVertex(vertex){
      if(!Object.hasOwn(this.adjList, vertex)){ // checks if the object this.adjList already has the key called vertex.
        this.adjList[vertex] = []; // makes a key of that vertex and assigns an empty array of destinations or list of destinations.
      };
      return;
    };

    addEdge(src, dest){
      this.addVertex(src);
      this.addVertex(dest);

      this.adjList[src].push(dest)// if you do adjList.src it looks for a key that is lietrally named "src". To use a variable do adjList[src].
      this.adjList[dest].push(src)// remove this line for directed graph.
    }

    printGraph(){
     let keyArr = Object.keys(this.adjList);
      for(let i = 0; i < keyArr.length; i++){
    // the keys would be , keyArr[i],,, value would be this.adjList[keyArr[i]]
      console.log(keyArr[i], "--->", this.adjList[keyArr[i]])      
      }
    }
};


const g = new Graph();

g.addEdge(1,2)
g.addEdge(2,3)
g.addEdge(1,4)
g.addEdge(4,3)
g.addEdge(2,4)
g.addEdge(4,5)
g.addEdge(3,5)

g.printGraph()


