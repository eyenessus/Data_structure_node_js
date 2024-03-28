const binarySearch = (arr: number[], target: number) => {
    let left = 0;
    let right = arr.length;

    while (right > left) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = arr[indexToCheck];
        console.log(indexToCheck);

        if (checking === target) {
            return indexToCheck;
        } else if (checking < target) {
            left = indexToCheck + 1;//proximo indice
        } else {
            right = indexToCheck;
        }
    }

    return null;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

//   targetIndex = binarySearch(searchable, target);

//   console.log(`The target index is ${targetIndex}.`);


const BinaryTree = require('./BinaryTree');

// create a BinaryTree
const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);

// search for value 75 in BinaryTree
let node = bt.getNodeByValue(75);
console.log(node);

// search for a non-existent value in BinaryTree
node = bt.getNodeByValue(55);
console.log(node);

const randomize = () => Math.floor(Math.random() * 40);
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt.depthFirstTraversal();


module.exports = binarySearch;

