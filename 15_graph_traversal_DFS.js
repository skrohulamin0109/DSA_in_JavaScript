// ---------------------------------------------------------DFS for Matrix Representation of graphs--------------------------------------------------
// class Graph {
//     constructor(vertex) {
//         // this.mat = Array.from({length: vertex}, () => {return Array.from({length:vertex}, () => 0)})
//         this.mat = [];
//         for (let i = 0; i < vertex; i++) {
//             let row = [];
//             for (let j = 0; j < vertex; j++) {
//                 row.push(0);
//             }
//             this.mat.push(row);
//         }

//         this.size = vertex;
//     }

//       add_edges(src_u, directn_v, weight = 1){ // by default weight is 1; you can add different weight if you may.
//         if(0 <= src_u && src_u < this.size && 0 <= directn_v && directn_v < this.size){

//           this.mat[src_u][directn_v] = weight;
//           this.mat[directn_v][src_u] = weight; // if unidirectional edge, remove this.
//         }else{
//           throw new Error("Edge is outside range.")
//         }
//       }

//       dfs(src){
//         let visited = Array.from({length: this.size}, () => false);
//         let stack = [src];
//         let visited_points = [];
//         while(stack.length !== 0){
//           let vertex = stack.pop();
//             if(visited[vertex] === false){
//                 // console.log(vertex);
//                 visited_points.push(vertex);
//                 visited[vertex] = true;
//             }
//             for(let i = 0; i < this.size ; i++){
//                 if(this.mat[vertex][i] === 1 && visited[i] === false){
//                     stack.push(i);
//                 }
//             }

//         }

//         console.log(visited_points.join("-->")) // join automatically covertes the elements to string inside the array.

//     };

//       print_graph(){

//         for(let i = 0; i < this.size; i++){
//           let row_str = this.mat[i].map(item => item.toString())
//           console.log(row_str.join(" "))
//         }
//       }

// }

// ---------------------------------------------------------DFS for List Representation of graphs--------------------------------------------------

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!Object.hasOwn(this.adjList, vertex)) {
            // checks if the object this.adjList already has the key called vertex.
            this.adjList[vertex] = []; // makes a key of that vertex and assigns an empty array of destinations or list of destinations.
        }
        return;
    }

    addEdge(src, dest) {
        this.addVertex(src);
        this.addVertex(dest);

        this.adjList[src].push(dest); // if you do adjList.src it looks for a key that is lietrally named "src". To use a variable do adjList[src].
        this.adjList[dest].push(src); // remove this line for directed graph.
    }

    dfs(src) {
        let visited_l = {};
        let stack_l = [src];

        while (stack_l.length !== 0) {
            let vertex = stack_l.pop();

            if (!visited_l[vertex]) {
                console.log(vertex);
                visited_l[vertex] = true;
            }

            for (let neighbour of this.adjList[vertex]) {
               if(!visited_l[neighbour]){
                stack_l.push(neighbour)
               }
            }
        }
    }

    printGraph() {
        let keyArr = Object.keys(this.adjList);
        for (let i = 0; i < keyArr.length; i++) {
            // the keys would be , keyArr[i],,, value would be this.adjList[keyArr[i]]
            console.log(keyArr[i], "--->", this.adjList[keyArr[i]]);
        }
    }
}

const g = new Graph();

g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(1, 4);
g.addEdge(4, 3);
g.addEdge(2, 4);
g.addEdge(4, 5);
g.addEdge(3, 5);

g.printGraph();
