import { preOrder, inorder, postOrder } from "./traversal.js";

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

function height(node) {
    if (node == null) {
            return 0;
    }
    else
    {
        /* compute the depth from node */
        let lDepth = height(node.left);
        let rDepth = height(node.right);

        /* use the larger one */
        if (lDepth > rDepth)
            return (lDepth + 1);
            else
            return (rDepth + 1);
    }
}

function depth(root, node) {
    console.log(node);
    if (node == null) {
        return 0;
    }
    else if(node != root.left && node != root.right)
    {
         
        let lDepth = depth(root.left);
        let rDepth = depth(root.right);

        /* use the larger one */
        if (lDepth > rDepth)
            return (lDepth + 1);
            else
            return (rDepth + 1);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];

let tree = new Tree(array);
inorder(tree.root);
console.log(find(tree.root, 5))
console.log(depth(tree.root, find(tree.root, 1)));