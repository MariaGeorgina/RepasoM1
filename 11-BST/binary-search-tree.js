class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // escribe un metodo que inserte un nodo al final
    let newNode = new Node (value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return 'Ya lo tenés agregado';
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
       } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        }
      }
    }
  

  find(value) {
    // escribe un metodo que busque un nodo especifico
    if (!this.root) return null;
    let current = this.root;
    let indexL = 0;
    let indexR = 0;
    while (true) {
      if (value === current.value) return current;
      if (value > current.value) {
        if (current.right) {
          current = current.right;
          indexR++;
        } else {
          return false;
        }
      } else {
        
        if (current.left) {
          current = current.left;
          indexL++;
        } else {
          return false;
        }
      }
    }
  }
  

  size() {
    // escribe un metodo que determine el largo del arbol
    let count = 1;
    if (this.left) count += this.left.size();
    if (this.right) count += this.right.size();
    return count;
  }

  breadthFirstForEach() {
    // escribe el metodo breadthFirstForEach
    let node = this.root;
    data = [];
    queue = [];
    queue.push (node);
    while (queue.length) {
      node = queue.shift ();
      data.push (node);
      if (node.left) queue.push (node.left);
      if (node.right) queue.push (node.right);
    }
    return data;
  }

  depthFirstForEach(arg) {
    // escribe el metodo depthFirstForEach
    let current = this.root;
    data = [];
    if (arg === 'preOrder') preOrder (current);
    if (arg === 'inOrder' || !arg) inOrder (current);
    if (arg === 'postOrder') postOrder (current);
    function preOrder (node) {
      data.push (node.value);
      if (node.left) preOrder (node.left);
      if (node.right) preOrder (node.right);
    }
    function inOrder (node) {
      if (node.left) inOrder (node.left);
      data.push (node.value);
      if (node.right) inOrder (node.right);
    }
    function postOrder (node) {
      if (node.left) postOrder (node.left);
      if (node.right) postOrder (node.right);
      data.push (node.value);
    }
    return data;
  }
}
