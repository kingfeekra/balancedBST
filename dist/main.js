/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/traversal.js":
/*!**************************!*\
  !*** ./src/traversal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inorder": () => (/* binding */ inorder),
/* harmony export */   "postOrder": () => (/* binding */ postOrder),
/* harmony export */   "preOrder": () => (/* binding */ preOrder)
/* harmony export */ });
function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    document.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}

function inorder(root)
{
    if (root != null) {
            inorder(root.left);
            document.write(root.data + " ");
            inorder(root.right);
        }
}

function postOrder(node) {
    if (node == null)
    {
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    document.write(node.data + " ");
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _traversal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traversal.js */ "./src/traversal.js");


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
    console.log(newArray);
    let newTree = new Tree(newArray);
    tree = newTree;
}

let array = [1, 2, 3, 4, 5, 6, 7];

let tree = new Tree(array);
tree.root.left.left.left = new Node(15);
tree.root.left.left.left.left = new Node(18);
tree.root.left.left.left.left.left = new Node(19);
tree.root.left.left.left.left.left.left = new Node(23);
//console.log(find(tree.root, 5))
//console.log(depth(tree.root, find(tree.root, 1)));
console.log(isBalanced(tree.root));
rebalance(tree.root);
(0,_traversal_js__WEBPACK_IMPORTED_MODULE_0__.inorder)(tree.root);
console.log(isBalanced(tree.root));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBTztBQUNQLG1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsYW5jZWRic3QvLi9zcmMvdHJhdmVyc2FsLmpzIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3QvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHByZU9yZGVyKG5vZGUpXG57XG4gICAgaWYgKG5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQud3JpdGUobm9kZS5kYXRhICsgXCIgXCIpO1xuICAgIHByZU9yZGVyKG5vZGUubGVmdCk7XG4gICAgcHJlT3JkZXIobm9kZS5yaWdodCk7XG59XG5cbmZ1bmN0aW9uIGlub3JkZXIocm9vdClcbntcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbm9yZGVyKHJvb3QubGVmdCk7XG4gICAgICAgICAgICBkb2N1bWVudC53cml0ZShyb290LmRhdGEgKyBcIiBcIik7XG4gICAgICAgICAgICBpbm9yZGVyKHJvb3QucmlnaHQpO1xuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RPcmRlcihub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9zdE9yZGVyKG5vZGUubGVmdCk7XG4gICAgcG9zdE9yZGVyKG5vZGUucmlnaHQpO1xuICAgIGRvY3VtZW50LndyaXRlKG5vZGUuZGF0YSArIFwiIFwiKTtcbn1cblxuZXhwb3J0IHtpbm9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJlT3JkZXIsIGlub3JkZXIsIHBvc3RPcmRlciB9IGZyb20gXCIuL3RyYXZlcnNhbC5qc1wiO1xuXG5jbGFzcyBOb2RlXG57XG4gICAgY29uc3RydWN0b3IoZGF0YSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnIsIDAsIGFyci5sZW5ndGgtMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICAgIG5vZGUubGVmdCA9ICBidWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZCArIDEsIGVuZCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0KGtleSkge1xuICAgIGluc2VydFJlYyh0cmVlLnJvb3QsIGtleSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydFJlYyhyb290LCBrZXkpIHtcbiAgICBpZiAocm9vdCA9PSBudWxsKSB7ICAgICAgICAgLy9pZiB0cmVlIGlzIGVtcHR5LCByZXR1cm4gbmV3IG5vZGVcbiAgICAgICAgcm9vdCA9IG5ldyBOb2RlKGtleSk7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAoa2V5IDwgcm9vdC5kYXRhKSB7XG4gICAgICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyhyb290LmxlZnQsIGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA+IHJvb3QuZGF0YSkge1xuICAgICAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKHJvb3QucmlnaHQsIGtleSk7XG4gICAgfVxuICAgICAgICAvKiByZXR1cm4gdGhlICh1bmNoYW5nZWQpIG5vZGUgcG9pbnRlciAqL1xuICAgICAgICByZXR1cm4gcm9vdDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlS2V5KCkge1xuICAgIGRlbGV0ZVJlYyh0cmVlLnJvb3QsIGtleSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVJlYyhyb290LCBrZXkpIHtcbiAgICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKGtleSA8IHJvb3QuZGF0YSkge1xuICAgICAgICAgICAgcm9vdC5sZWZ0ID0gZGVsZXRlUmVjKHJvb3QubGVmdCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5kYXRhKSB7XG4gICAgICAgIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIG5vZGUgd2l0aCBvbmx5IG9uZSBjaGlsZCBvciBubyBjaGlsZFxuICAgICAgICBpZiAocm9vdC5sZWZ0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJvb3QucmlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QubGVmdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBub2RlIHdpdGggdHdvIGNoaWxkcmVuOiBHZXQgdGhlIGlub3JkZXJcbiAgICAgICAgLy8gc3VjY2Vzc29yIChzbWFsbGVzdCBpbiB0aGUgcmlnaHQgc3VidHJlZSlcbiAgICAgICAgcm9vdC5rZXkgPSBtaW5WYWx1ZShyb290LnJpZ2h0KTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGlub3JkZXIgc3VjY2Vzc29yXG4gICAgICAgIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwgcm9vdC5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cbmZ1bmN0aW9uIG1pblZhbHVlKHJvb3QpXG57XG4gICAgbGV0IG1pbnYgPSByb290LmRhdGE7XG4gICAgICAgIHdoaWxlIChyb290LmxlZnQgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbWludiA9IHJvb3QubGVmdC5kYXRhO1xuICAgICAgICAgICAgcm9vdCA9IHJvb3QubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWludjtcbn1cblxuZnVuY3Rpb24gZmluZChyb290LCBrZXkpIHtcbiAgICBpZiAocm9vdCA9PSBudWxsIHx8cm9vdC5kYXRhID09IGtleSkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHJvb3QuZGF0YSA8IGtleSkge1xuICAgICAgIHJldHVybiBmaW5kKHJvb3QucmlnaHQsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5kKHJvb3QubGVmdCwga2V5KTtcbn1cblxuZnVuY3Rpb24gbGV2ZWxPcmRlcihyb290KSB7XG4gICAgaWYocm9vdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcXVldWUgPSBbcm9vdF07XG4gICAgd2hpbGUocXVldWUubGVuZ3RoICE9IDApIHtcbiAgICAgICAgbGV0IG5vZGUgPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhKTtcbiAgICAgICAgaWYgKG5vZGUubGVmdCkgcXVldWUudW5zaGlmdChub2RlLmxlZnQpXG4gICAgICAgIGlmIChub2RlLnJpZ2h0KSBxdWV1ZS51bnNoaWZ0KG5vZGUucmlnaHQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoZWlnaHQocm9vdCkge1xuICAgIGlmKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMFxuICAgIH1cbiAgICAvLyBJbml0aWFsaXNpbmcgYSB2YXJpYWJsZSB0byBjb3VudCB0aGVcbiAgICAvLyBoZWlnaHQgb2YgdHJlZVxuICAgIGxldCBkZXB0aCA9IDBcbiBcbiAgICBsZXQgcSA9IFtdXG4gICAgIFxuICAgIC8vIHB1c2hpbmcgZmlyc3QgbGV2ZWwgZWxlbWVudCBhbG9uZyB3aXRoIG51bGxcbiAgICBxLnB1c2gocm9vdClcbiAgICBxLnB1c2gobnVsbClcbiAgICB3aGlsZShxLmxlbmd0aD4wKXtcbiAgICAgICAgbGV0IHRlbXAgPSBxLnNoaWZ0KClcbiAgICAgXG4gICAgICAgIC8vIFdoZW4gbnVsbCBlbmNvdW50ZXJlZCwgaW5jcmVtZW50IHRoZSB2YWx1ZVxuICAgICAgICBpZih0ZW1wID09IG51bGwpXG4gICAgICAgICAgICBkZXB0aCArPSAxXG4gICAgICAgICBcbiAgICAgICAgLy8gSWYgbnVsbCBub3QgZW5jb3VudGVyZWQsIGtlZXAgbW92aW5nXG4gICAgICAgIGlmKHRlbXAgIT0gbnVsbCl7XG4gICAgICAgICAgICBpZih0ZW1wLmxlZnQpXG4gICAgICAgICAgICAgICAgcS5wdXNoKHRlbXAubGVmdClcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRlbXAucmlnaHQpXG4gICAgICAgICAgICAgICAgcS5wdXNoKHRlbXAucmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgLy8gSWYgcXVldWUgc3RpbGwgaGF2ZSBlbGVtZW50cyBsZWZ0LFxuICAgICAgICAvLyBwdXNoIG51bGwgYWdhaW4gdG8gdGhlIHF1ZXVlLlxuICAgICAgICBlbHNlIGlmKHEubGVuZ3RoPjApXG4gICAgICAgICAgICBxLnB1c2gobnVsbClcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoXG59XG5cbmZ1bmN0aW9uIGRlcHRoKHJvb3QsIHgpXG57XG4gICAgICBcbiAgICAvLyBCYXNlIGNhc2VcbiAgICBpZiAocm9vdCA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG4gIFxuICAgIC8vIEluaXRpYWxpemUgZGlzdGFuY2UgYXMgLTFcbiAgICBsZXQgZGlzdCA9IC0xO1xuICBcbiAgICAvLyBDaGVjayBpZiB4IGlzIGN1cnJlbnQgbm9kZT1cbiAgICBpZiAoKHJvb3QuZGF0YSA9PSB4LmRhdGEpfHwgXG4gICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiB4IGlzXG4gICAgICAgIC8vIHByZXNlbnQgaW4gdGhlIGxlZnQgc3VidHJlZVxuICAgICAgICAoZGlzdCA9IGRlcHRoKHJvb3QubGVmdCwgeCkpID49IDAgfHwgXG4gICAgICAgICAgXG4gICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgeCBpc1xuICAgICAgICAvLyBwcmVzZW50IGluIHRoZSByaWdodCBzdWJ0cmVlXG4gICAgICAgIChkaXN0ID0gZGVwdGgocm9vdC5yaWdodCwgeCkpID49IDApXG4gICAge1xuICAgICAgICAvLyBSZXR1cm4gZGVwdGggb2YgdGhlIG5vZGVcbiAgICAgICAgcmV0dXJuIGRpc3QgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gZGlzdDtcbn1cblxuZnVuY3Rpb24gaXNCYWxhbmNlZChyb290KXtcbiAgICAgXG4gICAgLy8gQmFzZSBjb25kaXRpb25cbiAgICBpZihyb290ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gZm9yIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWUgaGVpZ2h0XG4gICAgbGV0IGxoID0gaGVpZ2h0KHJvb3QubGVmdClcbiAgICBsZXQgcmggPSBoZWlnaHQocm9vdC5yaWdodClcbiBcbiAgICAvLyBhbGxvd2VkIHZhbHVlcyBmb3IgKGxoIC0gcmgpIGFyZSAxLCAtMSwgMCwgYWJzIGdpdmVzIGVpdGhlciAxIG9yIDBcbiAgICBpZiAoTWF0aC5hYnMobGggLSByaCkgPD0gMSAmJiBpc0JhbGFuY2VkKFxuICAgIHJvb3QubGVmdCk9PSB0cnVlICYmIGlzQmFsYW5jZWQocm9vdC5yaWdodCkgPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gXG4gXG4gICAgLy8gaWYgd2UgcmVhY2ggaGVyZSBtZWFucyB0cmVlIGlzIG5vdFxuICAgIC8vIGhlaWdodC1iYWxhbmNlZCB0cmVlXG4gICAgcmV0dXJuIGZhbHNlXG59XG5sZXQgbmV3QXJyYXkgPSBbXTtcbmZ1bmN0aW9uIHJlYmFsYW5jZShyb290KSB7XG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xuICAgICAgICBuZXdBcnJheS5wdXNoKHJvb3QuZGF0YSk7XG4gICAgICAgIHJlYmFsYW5jZShyb290LmxlZnQpO1xuICAgICAgICByZWJhbGFuY2Uocm9vdC5yaWdodCk7XG4gICAgfVxuICAgIG5ld0FycmF5LnNvcnQoZnVuY3Rpb24oYSwgYil7cmV0dXJuIGEtYn0pIC8vc29ydHMgYXJyYXkgaW4gYXNjZW5kaW5nIG9yZGVyXG4gICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuICAgIGxldCBuZXdUcmVlID0gbmV3IFRyZWUobmV3QXJyYXkpO1xuICAgIHRyZWUgPSBuZXdUcmVlO1xufVxuXG5sZXQgYXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgN107XG5cbmxldCB0cmVlID0gbmV3IFRyZWUoYXJyYXkpO1xudHJlZS5yb290LmxlZnQubGVmdC5sZWZ0ID0gbmV3IE5vZGUoMTUpO1xudHJlZS5yb290LmxlZnQubGVmdC5sZWZ0LmxlZnQgPSBuZXcgTm9kZSgxOCk7XG50cmVlLnJvb3QubGVmdC5sZWZ0LmxlZnQubGVmdC5sZWZ0ID0gbmV3IE5vZGUoMTkpO1xudHJlZS5yb290LmxlZnQubGVmdC5sZWZ0LmxlZnQubGVmdC5sZWZ0ID0gbmV3IE5vZGUoMjMpO1xuLy9jb25zb2xlLmxvZyhmaW5kKHRyZWUucm9vdCwgNSkpXG4vL2NvbnNvbGUubG9nKGRlcHRoKHRyZWUucm9vdCwgZmluZCh0cmVlLnJvb3QsIDEpKSk7XG5jb25zb2xlLmxvZyhpc0JhbGFuY2VkKHRyZWUucm9vdCkpO1xucmViYWxhbmNlKHRyZWUucm9vdCk7XG5pbm9yZGVyKHRyZWUucm9vdCk7XG5jb25zb2xlLmxvZyhpc0JhbGFuY2VkKHRyZWUucm9vdCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==