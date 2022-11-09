/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "driver": () => (/* binding */ driver),
/* harmony export */   "randomArray": () => (/* binding */ randomArray)
/* harmony export */ });
/* harmony import */ var _traversal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traversal.js */ "./src/traversal.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ "./src/script.js");




function randomArray(value) {
    let array = [];
    for(let i = 0; i < value; i++) {
       let number = Math.floor(Math.random() * 101);
        array.push(number);
    }
    return array.sort(function(a, b){return a-b});
}

function driver() {

(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.isBalanced)(_script_js__WEBPACK_IMPORTED_MODULE_1__.tree.root);

(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.insert)(102);
(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.insert)(103);
(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.insert)(104);
(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.insert)(105);
(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.insert)(106);
(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.insert)(107);

(0,_traversal_js__WEBPACK_IMPORTED_MODULE_0__.inorder)(_script_js__WEBPACK_IMPORTED_MODULE_1__.tree.root);

console.log((0,_script_js__WEBPACK_IMPORTED_MODULE_1__.isBalanced)(_script_js__WEBPACK_IMPORTED_MODULE_1__.tree.root));

console.log((0,_script_js__WEBPACK_IMPORTED_MODULE_1__.rebalance)(_script_js__WEBPACK_IMPORTED_MODULE_1__.tree.root));

console.log((0,_script_js__WEBPACK_IMPORTED_MODULE_1__.isBalanced)(_script_js__WEBPACK_IMPORTED_MODULE_1__.tree.root));

}




/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": () => (/* binding */ Tree),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isBalanced": () => (/* binding */ isBalanced),
/* harmony export */   "rebalance": () => (/* binding */ rebalance),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var _traversal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traversal.js */ "./src/traversal.js");
/* harmony import */ var _driver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver.js */ "./src/driver.js");


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

let array = (0,_driver_js__WEBPACK_IMPORTED_MODULE_1__.randomArray)(9);
let tree = new Tree(array);
/*console.log(find(tree.root, 5))
console.log(depth(tree.root, find(tree.root, 1)));
console.log(isBalanced(tree.root));
rebalance(tree.root);
inorder(tree.root);
console.log(randomArray(8));*/

(0,_driver_js__WEBPACK_IMPORTED_MODULE_1__.driver)();



/***/ }),

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNROzs7QUFHdEU7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEOztBQUVBOztBQUVBLHNEQUFVLENBQUMsaURBQVM7O0FBRXBCLGtEQUFNO0FBQ04sa0RBQU07QUFDTixrREFBTTtBQUNOLGtEQUFNO0FBQ04sa0RBQU07QUFDTixrREFBTTs7QUFFTixzREFBTyxDQUFDLGlEQUFTOztBQUVqQixZQUFZLHNEQUFVLENBQUMsaURBQVM7O0FBRWhDLFlBQVkscURBQVMsQ0FBQyxpREFBUzs7QUFFL0IsWUFBWSxzREFBVSxDQUFDLGlEQUFTOztBQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQzhEO0FBQ2Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHVEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsa0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9OTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy9kcml2ZXIuanMiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3QvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL2JhbGFuY2VkYnN0Ly4vc3JjL3RyYXZlcnNhbC5qcyIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmVPcmRlciwgaW5vcmRlciwgcG9zdE9yZGVyIH0gZnJvbSBcIi4vdHJhdmVyc2FsLmpzXCI7XG5pbXBvcnQge2lzQmFsYW5jZWQsIHJlYmFsYW5jZSwgVHJlZSwgdHJlZSwgaW5zZXJ0fSBmcm9tIFwiLi9zY3JpcHQuanNcIjtcblxuXG5mdW5jdGlvbiByYW5kb21BcnJheSh2YWx1ZSkge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XG4gICAgICAgIGFycmF5LnB1c2gobnVtYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYil7cmV0dXJuIGEtYn0pO1xufVxuXG5mdW5jdGlvbiBkcml2ZXIoKSB7XG5cbmlzQmFsYW5jZWQodHJlZS5yb290KTtcblxuaW5zZXJ0KDEwMik7XG5pbnNlcnQoMTAzKTtcbmluc2VydCgxMDQpO1xuaW5zZXJ0KDEwNSk7XG5pbnNlcnQoMTA2KTtcbmluc2VydCgxMDcpO1xuXG5pbm9yZGVyKHRyZWUucm9vdCk7XG5cbmNvbnNvbGUubG9nKGlzQmFsYW5jZWQodHJlZS5yb290KSk7XG5cbmNvbnNvbGUubG9nKHJlYmFsYW5jZSh0cmVlLnJvb3QpKTtcblxuY29uc29sZS5sb2coaXNCYWxhbmNlZCh0cmVlLnJvb3QpKTtcblxufVxuXG5cbmV4cG9ydCB7cmFuZG9tQXJyYXksIGRyaXZlcn07IiwiaW1wb3J0IHsgcHJlT3JkZXIsIGlub3JkZXIsIHBvc3RPcmRlciB9IGZyb20gXCIuL3RyYXZlcnNhbC5qc1wiO1xuaW1wb3J0IHtkcml2ZXIsIHJhbmRvbUFycmF5fSBmcm9tIFwiLi9kcml2ZXIuanNcIjtcbmNsYXNzIE5vZGVcbntcbiAgICBjb25zdHJ1Y3RvcihkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICAgICAgdGhpcy5yb290ID0gYnVpbGRUcmVlKGFyciwgMCwgYXJyLmxlbmd0aC0xKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoc3RhcnQgPiBlbmQpXG4gICAge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUoYXJyW21pZF0pO1xuXG4gICAgbm9kZS5sZWZ0ID0gIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICBub2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBpbnNlcnQoa2V5KSB7XG4gICAgaW5zZXJ0UmVjKHRyZWUucm9vdCwga2V5KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0UmVjKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09IG51bGwpIHsgICAgICAgICAvL2lmIHRyZWUgaXMgZW1wdHksIHJldHVybiBuZXcgbm9kZVxuICAgICAgICByb290ID0gbmV3IE5vZGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGlmIChrZXkgPCByb290LmRhdGEpIHtcbiAgICAgICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKHJvb3QubGVmdCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5kYXRhKSB7XG4gICAgICAgIHJvb3QucmlnaHQgPSBpbnNlcnRSZWMocm9vdC5yaWdodCwga2V5KTtcbiAgICB9XG4gICAgICAgIC8qIHJldHVybiB0aGUgKHVuY2hhbmdlZCkgbm9kZSBwb2ludGVyICovXG4gICAgICAgIHJldHVybiByb290O1xufVxuXG5mdW5jdGlvbiBkZWxldGVLZXkoKSB7XG4gICAgZGVsZXRlUmVjKHRyZWUucm9vdCwga2V5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUmVjKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAoa2V5IDwgcm9vdC5kYXRhKSB7XG4gICAgICAgICAgICByb290LmxlZnQgPSBkZWxldGVSZWMocm9vdC5sZWZ0LCBrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPiByb290LmRhdGEpIHtcbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCBrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gbm9kZSB3aXRoIG9ubHkgb25lIGNoaWxkIG9yIG5vIGNoaWxkXG4gICAgICAgIGlmIChyb290LmxlZnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm9vdC5yaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vZGUgd2l0aCB0d28gY2hpbGRyZW46IEdldCB0aGUgaW5vcmRlclxuICAgICAgICAvLyBzdWNjZXNzb3IgKHNtYWxsZXN0IGluIHRoZSByaWdodCBzdWJ0cmVlKVxuICAgICAgICByb290LmtleSA9IG1pblZhbHVlKHJvb3QucmlnaHQpO1xuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgaW5vcmRlciBzdWNjZXNzb3JcbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCByb290LmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbn1cblxuZnVuY3Rpb24gbWluVmFsdWUocm9vdClcbntcbiAgICBsZXQgbWludiA9IHJvb3QuZGF0YTtcbiAgICAgICAgd2hpbGUgKHJvb3QubGVmdCAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBtaW52ID0gcm9vdC5sZWZ0LmRhdGE7XG4gICAgICAgICAgICByb290ID0gcm9vdC5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW52O1xufVxuXG5mdW5jdGlvbiBmaW5kKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09IG51bGwgfHxyb290LmRhdGEgPT0ga2V5KSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAocm9vdC5kYXRhIDwga2V5KSB7XG4gICAgICAgcmV0dXJuIGZpbmQocm9vdC5yaWdodCwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmQocm9vdC5sZWZ0LCBrZXkpO1xufVxuXG5mdW5jdGlvbiBsZXZlbE9yZGVyKHJvb3QpIHtcbiAgICBpZihyb290ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBxdWV1ZSA9IFtyb290XTtcbiAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT0gMCkge1xuICAgICAgICBsZXQgbm9kZSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlLmRhdGEpO1xuICAgICAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS51bnNoaWZ0KG5vZGUubGVmdClcbiAgICAgICAgaWYgKG5vZGUucmlnaHQpIHF1ZXVlLnVuc2hpZnQobm9kZS5yaWdodClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhlaWdodChyb290KSB7XG4gICAgaWYocm9vdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIC8vIEluaXRpYWxpc2luZyBhIHZhcmlhYmxlIHRvIGNvdW50IHRoZVxuICAgIC8vIGhlaWdodCBvZiB0cmVlXG4gICAgbGV0IGRlcHRoID0gMFxuIFxuICAgIGxldCBxID0gW11cbiAgICAgXG4gICAgLy8gcHVzaGluZyBmaXJzdCBsZXZlbCBlbGVtZW50IGFsb25nIHdpdGggbnVsbFxuICAgIHEucHVzaChyb290KVxuICAgIHEucHVzaChudWxsKVxuICAgIHdoaWxlKHEubGVuZ3RoPjApe1xuICAgICAgICBsZXQgdGVtcCA9IHEuc2hpZnQoKVxuICAgICBcbiAgICAgICAgLy8gV2hlbiBudWxsIGVuY291bnRlcmVkLCBpbmNyZW1lbnQgdGhlIHZhbHVlXG4gICAgICAgIGlmKHRlbXAgPT0gbnVsbClcbiAgICAgICAgICAgIGRlcHRoICs9IDFcbiAgICAgICAgIFxuICAgICAgICAvLyBJZiBudWxsIG5vdCBlbmNvdW50ZXJlZCwga2VlcCBtb3ZpbmdcbiAgICAgICAgaWYodGVtcCAhPSBudWxsKXtcbiAgICAgICAgICAgIGlmKHRlbXAubGVmdClcbiAgICAgICAgICAgICAgICBxLnB1c2godGVtcC5sZWZ0KVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGVtcC5yaWdodClcbiAgICAgICAgICAgICAgICBxLnB1c2godGVtcC5yaWdodClcbiAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBxdWV1ZSBzdGlsbCBoYXZlIGVsZW1lbnRzIGxlZnQsXG4gICAgICAgIC8vIHB1c2ggbnVsbCBhZ2FpbiB0byB0aGUgcXVldWUuXG4gICAgICAgIGVsc2UgaWYocS5sZW5ndGg+MClcbiAgICAgICAgICAgIHEucHVzaChudWxsKVxuICAgIH1cbiAgICByZXR1cm4gZGVwdGhcbn1cblxuZnVuY3Rpb24gZGVwdGgocm9vdCwgeClcbntcbiAgICAgIFxuICAgIC8vIEJhc2UgY2FzZVxuICAgIGlmIChyb290ID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcbiAgXG4gICAgLy8gSW5pdGlhbGl6ZSBkaXN0YW5jZSBhcyAtMVxuICAgIGxldCBkaXN0ID0gLTE7XG4gIFxuICAgIC8vIENoZWNrIGlmIHggaXMgY3VycmVudCBub2RlPVxuICAgIGlmICgocm9vdC5kYXRhID09IHguZGF0YSl8fCBcbiAgICAgIFxuICAgICAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGlmIHggaXNcbiAgICAgICAgLy8gcHJlc2VudCBpbiB0aGUgbGVmdCBzdWJ0cmVlXG4gICAgICAgIChkaXN0ID0gZGVwdGgocm9vdC5sZWZ0LCB4KSkgPj0gMCB8fCBcbiAgICAgICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiB4IGlzXG4gICAgICAgIC8vIHByZXNlbnQgaW4gdGhlIHJpZ2h0IHN1YnRyZWVcbiAgICAgICAgKGRpc3QgPSBkZXB0aChyb290LnJpZ2h0LCB4KSkgPj0gMClcbiAgICB7XG4gICAgICAgIC8vIFJldHVybiBkZXB0aCBvZiB0aGUgbm9kZVxuICAgICAgICByZXR1cm4gZGlzdCArIDE7XG4gICAgfVxuICAgIHJldHVybiBkaXN0O1xufVxuXG5mdW5jdGlvbiBpc0JhbGFuY2VkKHJvb3Qpe1xuICAgICBcbiAgICAvLyBCYXNlIGNvbmRpdGlvblxuICAgIGlmKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBmb3IgbGVmdCBhbmQgcmlnaHQgc3VidHJlZSBoZWlnaHRcbiAgICBsZXQgbGggPSBoZWlnaHQocm9vdC5sZWZ0KVxuICAgIGxldCByaCA9IGhlaWdodChyb290LnJpZ2h0KVxuIFxuICAgIC8vIGFsbG93ZWQgdmFsdWVzIGZvciAobGggLSByaCkgYXJlIDEsIC0xLCAwLCBhYnMgZ2l2ZXMgZWl0aGVyIDEgb3IgMFxuICAgIGlmIChNYXRoLmFicyhsaCAtIHJoKSA8PSAxICYmIGlzQmFsYW5jZWQoXG4gICAgcm9vdC5sZWZ0KT09IHRydWUgJiYgaXNCYWxhbmNlZChyb290LnJpZ2h0KSA9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBcbiBcbiAgICAvLyBpZiB3ZSByZWFjaCBoZXJlIG1lYW5zIHRyZWUgaXMgbm90XG4gICAgLy8gaGVpZ2h0LWJhbGFuY2VkIHRyZWVcbiAgICByZXR1cm4gZmFsc2Vcbn1cbmxldCBuZXdBcnJheSA9IFtdO1xuZnVuY3Rpb24gcmViYWxhbmNlKHJvb3QpIHtcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XG4gICAgICAgIG5ld0FycmF5LnB1c2gocm9vdC5kYXRhKTtcbiAgICAgICAgcmViYWxhbmNlKHJvb3QubGVmdCk7XG4gICAgICAgIHJlYmFsYW5jZShyb290LnJpZ2h0KTtcbiAgICB9XG4gICAgbmV3QXJyYXkuc29ydChmdW5jdGlvbihhLCBiKXtyZXR1cm4gYS1ifSkgLy9zb3J0cyBhcnJheSBpbiBhc2NlbmRpbmcgb3JkZXJcbiAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKG5ld0FycmF5KTtcbiAgICB0cmVlID0gbmV3VHJlZTtcbn1cblxubGV0IGFycmF5ID0gcmFuZG9tQXJyYXkoOSk7XG5sZXQgdHJlZSA9IG5ldyBUcmVlKGFycmF5KTtcbi8qY29uc29sZS5sb2coZmluZCh0cmVlLnJvb3QsIDUpKVxuY29uc29sZS5sb2coZGVwdGgodHJlZS5yb290LCBmaW5kKHRyZWUucm9vdCwgMSkpKTtcbmNvbnNvbGUubG9nKGlzQmFsYW5jZWQodHJlZS5yb290KSk7XG5yZWJhbGFuY2UodHJlZS5yb290KTtcbmlub3JkZXIodHJlZS5yb290KTtcbmNvbnNvbGUubG9nKHJhbmRvbUFycmF5KDgpKTsqL1xuXG5kcml2ZXIoKTtcblxuZXhwb3J0e2lzQmFsYW5jZWQsIHJlYmFsYW5jZSwgaW5zZXJ0LCBUcmVlLCB0cmVlfTsiLCJmdW5jdGlvbiBwcmVPcmRlcihub2RlKVxue1xuICAgIGlmIChub2RlID09IG51bGwpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LndyaXRlKG5vZGUuZGF0YSArIFwiIFwiKTtcbiAgICBwcmVPcmRlcihub2RlLmxlZnQpO1xuICAgIHByZU9yZGVyKG5vZGUucmlnaHQpO1xufVxuXG5mdW5jdGlvbiBpbm9yZGVyKHJvb3QpXG57XG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5vcmRlcihyb290LmxlZnQpO1xuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUocm9vdC5kYXRhICsgXCIgXCIpO1xuICAgICAgICAgICAgaW5vcmRlcihyb290LnJpZ2h0KTtcbiAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBwb3N0T3JkZXIobm9kZSkge1xuICAgIGlmIChub2RlID09IG51bGwpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvc3RPcmRlcihub2RlLmxlZnQpO1xuICAgIHBvc3RPcmRlcihub2RlLnJpZ2h0KTtcbiAgICBkb2N1bWVudC53cml0ZShub2RlLmRhdGEgKyBcIiBcIik7XG59XG5cbmV4cG9ydCB7aW5vcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==