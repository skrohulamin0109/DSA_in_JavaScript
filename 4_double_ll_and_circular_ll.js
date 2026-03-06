class Node {
    constructor(value = null) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

// whenever a node object will get created, the constructor will automatically get called and it will initialize the data, next and prev properties of the node object. Three partitions of the node object.

class DoublyLL {
    constructor() {
        this.head = null;
    }

    insertAtEnd(value) {
        let temp = new Node(value);

        if (this.head === null) {
            this.head = temp;
            return;
        }

        let t1 = this.head;
        while (t1.next != null) {
            t1 = t1.next;
        }

        t1.next = temp;
        temp.prev = t1;
    }

    insertAtBeg(value) {
        let temp = new Node(value);

        if (this.head === null) {
            this.head = temp;
            return;
        }

        temp.next = this.head;
        this.head.prev = temp;

        this.head = temp;
    }

    insertAtMid(value, trgtNode) {
        let temp = new Node(value);
        let t1 = this.head;
        let p1 = null;

        if (t1 === null) {
            this.head = temp;
            return;
        }

        while (t1 !== null) {
            if (t1.data === trgtNode) {
                break;
            } else {
                p1 = t1;
                t1 = t1.next;
            }
        }

        if (t1 !== null && t1.data === trgtNode && t1.next === null) {
            // found at last node
            temp.prev = t1;
            t1.next = temp;
        } else if (t1 !== null && t1.data === trgtNode && t1.next !== null) {
            // found in the middle
            temp.next = t1.next;
            t1.next.prev = temp;
            t1.next = temp;
            temp.prev = t1;
        } else if (t1 === null) {
            // not found
            temp.prev = p1;
            p1.next = temp;
        }
    }

    deletionDLL(value) {
        let t1 = this.head;
        let p1 = null;
        // empty List
        if (t1 === null) {
            console.log("Linked List is empty.");
            return;
        }
        // only one element
        if (t1.data === value && t1.prev === null && t1.next === null) {
            this.head = null;
            return;
        }

        // found at the beggining
        if (t1.data === value) {
            this.head = t1.next;
            this.head.prev = null;
            return;
        }

        while (t1 !== null) {
            if (t1.data === value) {
                break;
            } else {
                p1 = t1;
                t1 = t1.next;
            }
        }

        if (t1 !== null && t1.data === value && t1.next !== null) {
            // found in the middle
            p1.next = t1.next;
            t1.next.prev = p1;
        } else if (t1 !== null && t1.data === value && t1.next === null) {
            // found at end
            p1.next = null;
        } else if (t1 === null) {
            // not found
            return;
        }
    }

    deletionDLL_v_2(value) {
        let t1 = this.head;

        // Empty list
        if (t1 === null) {
            console.log("Linked List is empty");
            return;
        }

        // Only one value
        if (t1.data === value && t1.prev === null && t1.next === null) {
            this.head = null;
            return;
        }

        // Found at the beginning
        if (t1.data === value) {
            this.head = t1.next; // Now the head points to the second node
            this.head.prev = null;
            return;
        }

        while (t1 !== null) {
            if (t1.data === value) {
                break;
            } else {
                t1 = t1.next;
            }
        }

        if (t1 === null) {
            // No match found
            console.log("Value not present for deletion");
            return;
        } else if (t1.data === value && t1.next !== null) {
            // Found in the middle
            t1.prev.next = t1.next;
            t1.next.prev = t1.prev;
        } else if (t1.data === value && t1.next === null) {
            // Found at the end
            t1.prev.next = null;
        }
    }

    printDLL() {
        let t1 = this.head;
        let OutPutArr = [];
        while (t1 != null) {
            // console.log(t1.data);
            // process.stdout.write(t1.data + "<-->")
            OutPutArr.push(t1.data);
            t1 = t1.next;
        }
        let resultStr = OutPutArr.join("<-->");
        console.log(resultStr);
    }
}

let obj = new DoublyLL();
obj.insertAtEnd(10);
obj.insertAtEnd(20);
obj.insertAtEnd(30);
obj.insertAtBeg(5);
obj.insertAtBeg(3);
obj.insertAtBeg(1);
obj.insertAtMid(2, 1);
obj.insertAtMid(4, 3);
obj.insertAtMid(7, 5);

obj.printDLL();


