class Node {
    constructor(info, next = null) { // constructor allocates memory for the new node and initializes its data and next pointer
        this.data = info; //this.any_name_you_want = the_parameter_you_want_to_use_given_to_constructor;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }
    insertAtEnd(value) {
        // value is the value that we want to insert
        let temp = new Node(value); // create a new node with the given value
        if (this.head !== null) {
            let t1 = this.head; // create a temporary pointer to traverse the list
            while (t1.next !== null) {
                t1 = t1.next; // move the pointer to the next node
            }
            t1.next = temp; // insert the new node at the end
        } else if (this.head === null) {
            this.head = temp; // if the list is empty, make the new node the head
        }
    }

    insertAtBeg(value) {
        let temp = new Node(value); // create a new node with the given value
        temp.next = this.head; // point the new node's next to the current head
        this.head = temp; // update the head to be the new node
    }

    insertInMiddle(value, position_data) {
        let temp = new Node(value);
        let t1 = this.head;

        while (t1.next !== null) {
            if (t1.data === position_data) {
                temp.next = t1.next;  // here both temp and t1 are pointing to the same node, so we can use either of them to access the next node
                t1.next = temp; // We change the next of t1 to point to temp, which effectively inserts temp after t1
                break;
            }
            t1 = t1.next;
        }
    }

    deleteLinkedList(value) {
      let t1 = this.head;
      let prev = null;

      if(t1.data === value){
        this.head = t1.next;
        return;
      }

      while(t1.next !== null){
        if(t1.data === value){
          prev.next = t1.next;
          break;
        }else{
          prev = t1;
          t1 = t1.next;
        }
      }

      if(t1.data === value){
        prev.next = null;
      }
    }

    consoleLogLL() {
        let t1 = this.head; // create a temporary pointer to traverse the list
        while (t1 !== null) {
            console.log(t1.data); // print the data of the current node
            t1 = t1.next; // move the pointer to the next node
        }
    }

}

const obj = new SinglyLinkedList();
obj.insertAtEnd(10);
obj.insertAtEnd(20);
obj.insertAtEnd(30);
obj.insertAtBeg(5);
obj.insertInMiddle(15, 20);
obj.insertInMiddle(35, 15);
obj.deleteLinkedList(30);
obj.consoleLogLL();
