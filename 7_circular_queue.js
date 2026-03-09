class CircularQueue {
    constructor(Arrsize) {
        this.size = Arrsize;
        this.items = Array.from({ length: this.size }, () => null);
        this.front = this.rear = -1;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    enqueue(value) {
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else if (this.isFull()) {
            console.log(
                "Queue is full, no more values can be added. delete atleast one item to add another.",
            );

            return;
        } else {
            this.rear = (this.rear + 1) % this.size;
            // I could have made the rear null here before inserting but while moving the front I would have already made it null.
        }
        this.items[this.rear] = value;

        console.log(this.items);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to remove.");
            return;
        } else if (this.rear === this.front) {
            let remItem = this.items[this.front];
            this.items[this.front] = null;
            this.front = this.rear = -1;
            console.log(
                `last element ${remItem} is removed. The queue is now empty`,
            );
            return remItem;
        } else {
            let remItem = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.size;
            console.log(`removed ${remItem}`);
            return remItem;
        };
    };
};

let cq = new CircularQueue(3);
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();