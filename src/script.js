import { preOrder, inorder, postOrder } from "./traversal.js";
import {driver, randomArray} from "./driver.js";
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.root = buildTree(arr, 0, arr.length-1);
    }
}

function buildTree(arr, start, end) {
    if (start > end)
    {
        return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left =  buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);

    return node;
}

function insert(key) {
    insertRec(tree.root, key);
}

function insertRec(root, key) {
    if (root == null) {         //if tree is empty, return new node
        root = new Node(key);
        return root;
    }
    if (key < root.data) {
        root.left = insertRec(root.left, key);
    }
    else if (key > root.data) {
        root.right = insertRec(root.right, key);
    }
        /* return the (unchanged) node pointer */
        return root;
}

function deleteKey() {
    deleteRec(tree.root, key);
}

function deleteRec(root, key) {
    if (root == null) {
            return root;
    }
    if (key < root.data) {
            root.left = deleteRec(root.left, key);
    }
    else if (key > root.data) {
        root.right = deleteRec(root.right, key);
    }
    else {
        // node with only one child or no child
        if (root.left == null) {
            return root.right;
        }
        else if (root.right == null) {
            return root.left;
        }
        // node with two children: Get the inorder
        // successor (smallest in the right subtree)
        root.key = minValue(root.right);

        // Delete the inorder successor
        root.right = deleteRec(root.right, root.data);
    }
    return root;
}

function minValue(root)
{
    let minv = root.data;
        while (root.left != null)
        {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
}

function find(root, key) {
    if (root == null ||root.data == key) {
        return root;
    }
    if (root.data < key) {
       return find(root.right, key);
    }
    return find(root.left, key);
}

function levelOrder(root) {
    if(root == null) {
        return null;
    }
    let queue = [root];
    while(queue.length != 0) {
        let node = queue.pop();
        console.log(node.data);
        if (node.left) queue.unshift(node.left)
        if (node.right) queue.unshift(node.right)
    }
}

function height(root) {
    if(root == null) {
        return 0
    }
    // Initialising a variable to count the
    // height of tree
    let depth = 0
 
    let q = []
     
    // pushing first level element along with null
    q.push(root)
    q.push(null)
    while(q.length>0){
        let temp = q.shift()
     
        // When null encountered, increment the value
        if(temp == null)
            depth += 1
         
        // If null not encountered, keep moving
        if(temp != null){
            if(temp.left)
                q.push(temp.left)
             
            if(temp.right)
                q.push(temp.right)
        }
             
        // If queue still have elements left,
        // push null again to the queue.
        else if(q.length>0)
            q.push(null)
    }
    return depth
}

function depth(root, x)
{
      
    // Base case
    if (root == null)
        return -1;
  
    // Initialize distance as -1
    let dist = -1;
  
    // Check if x is current node=
    if ((root.data == x.data)|| 
      
        // Otherwise, check if x is
        // present in the left subtree
        (dist = depth(root.left, x)) >= 0 || 
          
        // Otherwise, check if x is
        // present in the right subtree
        (dist = depth(root.right, x)) >= 0)
    {
        // Return depth of the node
        return dist + 1;
    }
    return dist;
}

function isBalanced(root){
     
    // Base condition
    if(root == null) {
        return true
    }
    // for left and right subtree height
    let lh = height(root.left)
    let rh = height(root.right)
 
    // allowed values for (lh - rh) are 1, -1, 0, abs gives either 1 or 0
    if (Math.abs(lh - rh) <= 1 && isBalanced(
    root.left)== true && isBalanced(root.right) == true) {
        return true
    } 
 
    // if we reach here means tree is not
    // height-balanced tree
    return false
}
let newArray = [];
function rebalance(root) {
    if (root != null) {
        newArray.push(root.data);
        rebalance(root.left);
        rebalance(root.right);
    }
    newArray.sort(function(a, b){return a-b}) //sorts array in ascending order
    let newTree = new Tree(newArray);
    tree = newTree;
}

let array = randomArray(9);
let tree = new Tree(array);
/*console.log(find(tree.root, 5))
console.log(depth(tree.root, find(tree.root, 1)));
console.log(isBalanced(tree.root));
rebalance(tree.root);
inorder(tree.root);
console.log(randomArray(8));*/

driver();

export{isBalanced, rebalance, insert, Tree, tree};