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
          throw new Error("Edge is outside range.")
        }
      }

      dfs(src){
        let visited = Array.from({length: this.size}, () => false);
        let stack = [src];
        let visited_points = [];
        while(stack.length !== 0){
          let vertex = stack.pop();
            if(visited[vertex] === false){
                // console.log(vertex);
                visited_points.push(vertex);
                visited[vertex] = true;
            }
            for(let i = 0; i < this.size ; i++){
                if(this.mat[vertex][i] === 1 && visited[i] === false){
                    stack.push(i);
                }
            }

        }

        console.log(visited_points.join("-->")) // join automatically covertes the elements to string inside the array.
        
    };


      print_graph(){

        for(let i = 0; i < this.size; i++){
          let row_str = this.mat[i].map(item => item.toString())
          console.log(row_str.join(" "))
        }
      }

}
