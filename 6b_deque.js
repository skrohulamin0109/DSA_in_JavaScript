class Deque_pointer_approach {
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

    enqueueAtEnd(value) {
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear += 1;
        }
        this.items.push(value);
    }

        enqueueAtBeg(value) {
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.items[0] = value;
        } else if(this.front > 0 ){
          this.front -= 1;
          this.items[this.front] = value;
        }else{
          throw new Error("no space for insertion at the begining")
        }
    }

    dequeueAtBeg() {
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

    dequeueAtEnd() {
        if (this.isEmpty()) {
            throw new Error("empty queue");
        }
        let remItem = this.items[this.rear];
        this.rear -= 1;

        if (this.isEmpty()) {
            this.items = [];
            this.front = -1;
            this.rear = -1;
        }
        return remItem;
    }
}


class Deque_shifting_approach{
  constructor(){
    this.items = [];
  };

  isEmpty(){
    return this.items.length === 0;
  };

  enqueueAtEnd(value){
    this.items.push(value);
  };

  enqueueAtBeg(value){
    return this.items.unshift(value);
  }

  dequeueAtBeg(){
    if(this.isEmpty()){
      throw new Error("empty deque")
    }
    return this.items.shift();
  }

  dequeueAtEnd(){
  if(this.isEmpty()){
    throw new Error("empty deque")
  }
  return this.items.pop();
  }
}
