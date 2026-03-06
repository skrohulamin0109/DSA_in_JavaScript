class Stack {
    constructor() {
        this.s = [];
    }

    isEmpty() {
        // this function should return a boolean
        return this.s.length === 0;
    }

    size() {// naming this method length makes it clear that we are using array, we want it to be abstruct.
        return this.s.length;
    }

    push(value) {
        this.s.unshift(value);
        // this.s.splice(0,0,value)
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        // if the throw runs the execution has already stopped. We don't need the else block
        return this.s[0];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.s.shift();
    }
}

//       The Constructor: In JavaScript, it is standard practice to use the new keyword when creating an error. While throw Error("...") technically works in most environments, new Error("...") is the conventional, explicit way to instantiate the object.

//       The Object Type: JavaScript uses Error as the base class. While you can technically "throw" anything in JS (like a string or a number), using the Error object is best practice because it captures a stack trace, which helps you debug where the failure occurred.
