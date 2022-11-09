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

insert(102);
insert(103);
insert(104);
insert(105);
insert(106);
insert(107);

inorder(tree.root);

console.log(isBalanced(tree.root));

rebalance(tree.root);

console.log(isBalanced(tree.root));

}


export {randomArray, driver};