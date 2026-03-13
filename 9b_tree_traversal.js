class Node{
  constructor(value){
    this.left = null;
    this.data = value;
    this.right = null;
  };
};

function preOrderTr(root){
  if(root !== null){
    console.log(root.data)
    preOrderTr(root.left);
    preOrderTr(root.right)
  }else{
    return
  };
};

function inOrderTr(root){
  if(root !== null){
    inOrderTr(root.left);
    console.log(root.data)
    inOrderTr(root.right)
  }else{
    return
  };
};

function postOrderTr(root){
  if(root !== null){
    postOrderTr(root.left);
    postOrderTr(root.right)
    console.log(root.data)
  }else{
    return
  };
};




// This is the tree that we have created.
let root = new Node(1);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(8);