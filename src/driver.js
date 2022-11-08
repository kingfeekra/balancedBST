import { preOrder, inorder, postOrder } from "./traversal.js";
import {isBalanced, rebalance, Tree, tree, insert} from "./script.js";


function randomArray(value) {
    let array = [];
    for(let i = 0; i < value; i++) {
       let number = Math.floor(Math.random() * 101);
        array.push(number);
    }
    return array.sort(function(a, b){return a-b});
}

function driver() {

isBalanced(tree.root);

insert(tree.root, 102);
insert(tree.root, 103);
insert(tree.root, 104);
insert(tree.root, 105);
insert(tree.root, 106);
insert(tree.root, 107);

inorder(tree.root);

console.log(isBalanced(tree.root));

console.log(rebalance(tree.root));

console.log(isBalanced(tree.root));

}


export {randomArray, driver};