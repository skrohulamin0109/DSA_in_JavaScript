class Graph {
    constructor(vertex) {
        // this.mat = Array.from({length: vertex}, () => {return Array.from({length:vertex}, () => 0)})
        this.mat = [];
        for (let i = 0; i < vertex; i++) {
            let row = [];
            for (let j = 0; j < vertex; j++) {
                row.push(0);
            }
            this.mat.push(row);
        }
        this.size = vertex;
    }

      add_edges(src_u, directn_v, weight = 1){ // by default weight is 1; you can add different weight if you may.
        if(0 <= src_u && src_u < this.size && 0 <= directn_v && directn_v < this.size){

          this.mat[src_u][directn_v] = weight;
          this.mat[directn_v][src_u] = weight; // if unidirectional edge, remove this.
        }else{
          throw new Error("Edge outsie range.")
        }
      }

      print_graph(){
        console.log(this.mat)// gives the array
        // We want a pure string representation.
        for(let i = 0; i < this.size; i++){
          let row_str = this.mat[i].map(item => item.toString())
          console.log(row_str.join(" "))
        }
      }

}


let G = new Graph(5);

G.add_edges(0,1)
G.add_edges(0,2)
G.add_edges(1,3)
G.add_edges(2,4)
G.add_edges(3,4)
G.add_edges(2,3)

G.print_graph()