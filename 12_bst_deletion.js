// Case-1: Deletion of leaf node (0 child) && case-2: Deletion of node having one child.

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

function insert(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (root.data === value) {
        return root;
    }

    if (root.data > value) {
        root.left = insert(root.left, value);
    } else {
        root.right = insert(root.right, value);
    }

    return root;
}

//DELETION: SEE THE EXPLANATIONS IN THE NOTES.
function get_successor(root) {
    // root is the node you want to delete that has two child nodes
    root = root.right;
    while (root !== null && root.left !== null) {
        root = root.left;
    }

    return root;
}

function delete_node(root, value) {
    if (root === null) return root;

    if (root.data > value) {
        root.left = delete_node(root.left, value);
    }else if (root.data < value) {
        root.right = delete_node(root.right, value);
    } else {
        if (root.left === null) {
            return root.right;
        }else if(root.right === null) {
            return root.left;
        } else {
            let succ = get_successor(root);
            root.data = succ.data;
            root.right = delete_node(root.right, succ.data);
        }
    }

    return root;
}

function inOrderTr(root) {
    if (root === null) return;

    inOrderTr(root.left);
    console.log(root.data);
    inOrderTr(root.right);
}

function search(root, value) {
    if (root === null) {
        return null;
    }

    if (root.data === value) {
        return root;
    }

    if (root.data > value) {
        return search(root.left, value);
    } else {
        return search(root.right, value);
    }
}

let root = insert(null, 20);
root = insert(root, 15);
root = insert(root, 30);
root = insert(root, 40);
root = insert(root, 12);
root = insert(root, 18);
root = insert(root, 25);
root = insert(root, 50);
inOrderTr(root);
console.log(search(root, 18));
console.log(search(root, 100));
