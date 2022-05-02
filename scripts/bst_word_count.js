
let bstWordCountField = document.getElementById('bst-word-count');
let bstWordCountOutput = document.getElementById('show-word-count');

let btnOne = document.querySelector('.first-btn');
btnOne.addEventListener('click', findAndCountWord);

function findAndCountWord() {
    let input = bstWordCountField.value;
    if (input) {
        bstWordCountOutput.textContent = countFrequency(tree.root, input);
    }
}

function alertOne() {
    // alert(`The number of Balanced Nodes in the Binary Tree are: ${}`)
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;

    }

}

function countFrequency(root, wordToCount) {
    let stringFinder = [];
    let current = root;

    let count = 0;

    while (current != null || stringFinder.length != 0) {
        while (current != null) {

            stringFinder.push(current);

            current = current.left;
        }

        current = stringFinder[stringFinder.length - 1];
        stringFinder.pop();

        if (current.value == wordToCount) {
            count++;
        }

        current = current.right;

    }

    if (count == 0) {
        return 'not found';
    }

    if (count == 1) {
        return `The word ${wordToCount} appears ${count} time`;
    }

    return `The word ${wordToCount} appears ${count} times`;
}




// function countNodes(root) {

//     if (root == null) {
//         return 0;
//     }

//     return 1 + balancedNodeLength(root);

// }


var tree = new BST();

// first subtree
tree.root = new Node('start');

tree.root.left = new Node('child');
tree.root.right = new Node('steak');

// left subtree
tree.root.left.left = new Node('movie');

tree.root.left.left.left = new Node('steak');
tree.root.left.left.right = new Node('child');

tree.root.left.left.right.left = new Node('map');
tree.root.left.left.right.right = new Node('menu');

tree.root.left.right = new Node('menu');

tree.root.left.right.left = new Node('pizza');
tree.root.left.right.right = new Node('steak');



// right subtree
tree.root.right.left = new Node('map');

tree.root.right.left.left = new Node('steak');

tree.root.right.left.left.left = new Node('child');
tree.root.right.left.left.right = new Node('steak');


tree.root.right.left.right = new Node('pizza');

tree.root.right.right = new Node('pizza');

tree.root.right.right.left = new Node('movie');
tree.root.right.right.right = new Node('steak');

tree.root.right.right.right.left = new Node('map');

