class Queue_pointer_approach {
    constructor() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
    }

    isEmpty() {
        if ( this.front === -1 || this.front > this.rear ) {
            return true;
        } else {
            return false;
        }
    }

    enqueue(value) {
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear += 1;
        }
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("empty queue");
        }
        let remItem = this.items[this.front];
        this.front += 1;

        if (this.isEmpty()) {
            this.items = [];
            this.front = -1;
            this.rear = -1;
        }
        return remItem;
    }
}


class Queue_shifting_approach{
  constructor(){
    this.items = [];
  };

  isEmpty(){
    return this.items.length === 0;
  };

  enqueue(value){
    this.items.push(value);
  };

  dequeue(){
    if(this.isEmpty()){
      throw new Error("empty queue")
    }
    return this.items.shift();
  }
}