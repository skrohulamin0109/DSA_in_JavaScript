class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

// inorder travarsal is the test of valid binary search tree. The elements are printed in increasing order.
// Always return the root of the new complete tree as it may change , and we would need the new root to keep track of the tree.
function insert(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (root.data === value) {
        return root; // you could also do, root.right = new Node(value) or root.left = new Node(value), but always follow one convention for already existing root.
    }

    if (root.data > value) {
        root.left = insert(root.left, value);
    } else {
        root.right = insert(root.right, value);
    }

    return root; // Always.
}

function inOrderTr(root) {
    if (root === null) return;
    
        inOrderTr(root.left);
        console.log(root.data);
        inOrderTr(root.right);
    
}

function search(root, value){
  if(root === null){
    return null; // use ful return value, someone can use this to do some logical task. A falsy value.
  };

  if(root.data === value){
    return root; // returns the whole root Node (object), left, right and the data. An object is a truthy value. Can be used for logical operations.
  };

  if(root.data > value){
    return search(root.left, value);
  }else{
    return search(root.right, value);
  };

}

// let root = new Node(20);
// root.left = new Node(15);
// root.right = new Node(30);
// root.left.left = new Node(12);
// root.left.right = new Node(18);
// root.right.right = new Node(40);

let root = insert(null, 20);
root = insert(root, 15); // we are updating the root as the root "might" get changed and our insert always returns the new root.
root = insert(root, 30)
root = insert(root, 40)
root = insert(root, 12)
root = insert(root, 18)
root = insert(root, 25)
root = insert(root, 50)
inOrderTr(root);
console.log(search(root, 18));
console.log(search(root, 100));