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
(0,_traversal_js__WEBPACK_IMPORTED_MODULE_0__.inorder)(tree.root);
console.log(find(tree.root, 5))
console.log(depth(tree.root, find(tree.root, 1)));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzREFBTztBQUNQO0FBQ0Esa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy90cmF2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJlT3JkZXIobm9kZSlcbntcbiAgICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC53cml0ZShub2RlLmRhdGEgKyBcIiBcIik7XG4gICAgcHJlT3JkZXIobm9kZS5sZWZ0KTtcbiAgICBwcmVPcmRlcihub2RlLnJpZ2h0KTtcbn1cblxuZnVuY3Rpb24gaW5vcmRlcihyb290KVxue1xuICAgIGlmIChyb290ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlub3JkZXIocm9vdC5sZWZ0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKHJvb3QuZGF0YSArIFwiIFwiKTtcbiAgICAgICAgICAgIGlub3JkZXIocm9vdC5yaWdodCk7XG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gcG9zdE9yZGVyKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3N0T3JkZXIobm9kZS5sZWZ0KTtcbiAgICBwb3N0T3JkZXIobm9kZS5yaWdodCk7XG4gICAgZG9jdW1lbnQud3JpdGUobm9kZS5kYXRhICsgXCIgXCIpO1xufVxuXG5leHBvcnQge2lub3JkZXIsIHByZU9yZGVyLCBwb3N0T3JkZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcmVPcmRlciwgaW5vcmRlciwgcG9zdE9yZGVyIH0gZnJvbSBcIi4vdHJhdmVyc2FsLmpzXCI7XG5cbmNsYXNzIE5vZGVcbntcbiAgICBjb25zdHJ1Y3RvcihkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICAgICAgdGhpcy5yb290ID0gYnVpbGRUcmVlKGFyciwgMCwgYXJyLmxlbmd0aC0xKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoc3RhcnQgPiBlbmQpXG4gICAge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUoYXJyW21pZF0pO1xuXG4gICAgbm9kZS5sZWZ0ID0gIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICBub2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBpbnNlcnQoa2V5KSB7XG4gICAgaW5zZXJ0UmVjKHRyZWUucm9vdCwga2V5KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0UmVjKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09IG51bGwpIHsgICAgICAgICAvL2lmIHRyZWUgaXMgZW1wdHksIHJldHVybiBuZXcgbm9kZVxuICAgICAgICByb290ID0gbmV3IE5vZGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGlmIChrZXkgPCByb290LmRhdGEpIHtcbiAgICAgICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKHJvb3QubGVmdCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5kYXRhKSB7XG4gICAgICAgIHJvb3QucmlnaHQgPSBpbnNlcnRSZWMocm9vdC5yaWdodCwga2V5KTtcbiAgICB9XG4gICAgICAgIC8qIHJldHVybiB0aGUgKHVuY2hhbmdlZCkgbm9kZSBwb2ludGVyICovXG4gICAgICAgIHJldHVybiByb290O1xufVxuXG5mdW5jdGlvbiBkZWxldGVLZXkoKSB7XG4gICAgZGVsZXRlUmVjKHRyZWUucm9vdCwga2V5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUmVjKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAoa2V5IDwgcm9vdC5kYXRhKSB7XG4gICAgICAgICAgICByb290LmxlZnQgPSBkZWxldGVSZWMocm9vdC5sZWZ0LCBrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPiByb290LmRhdGEpIHtcbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCBrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gbm9kZSB3aXRoIG9ubHkgb25lIGNoaWxkIG9yIG5vIGNoaWxkXG4gICAgICAgIGlmIChyb290LmxlZnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm9vdC5yaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vZGUgd2l0aCB0d28gY2hpbGRyZW46IEdldCB0aGUgaW5vcmRlclxuICAgICAgICAvLyBzdWNjZXNzb3IgKHNtYWxsZXN0IGluIHRoZSByaWdodCBzdWJ0cmVlKVxuICAgICAgICByb290LmtleSA9IG1pblZhbHVlKHJvb3QucmlnaHQpO1xuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgaW5vcmRlciBzdWNjZXNzb3JcbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCByb290LmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbn1cblxuZnVuY3Rpb24gbWluVmFsdWUocm9vdClcbntcbiAgICBsZXQgbWludiA9IHJvb3QuZGF0YTtcbiAgICAgICAgd2hpbGUgKHJvb3QubGVmdCAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBtaW52ID0gcm9vdC5sZWZ0LmRhdGE7XG4gICAgICAgICAgICByb290ID0gcm9vdC5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW52O1xufVxuXG5mdW5jdGlvbiBmaW5kKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09IG51bGwgfHxyb290LmRhdGEgPT0ga2V5KSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAocm9vdC5kYXRhIDwga2V5KSB7XG4gICAgICAgcmV0dXJuIGZpbmQocm9vdC5yaWdodCwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmQocm9vdC5sZWZ0LCBrZXkpO1xufVxuXG5mdW5jdGlvbiBsZXZlbE9yZGVyKHJvb3QpIHtcbiAgICBpZihyb290ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBxdWV1ZSA9IFtyb290XTtcbiAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT0gMCkge1xuICAgICAgICBsZXQgbm9kZSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlLmRhdGEpO1xuICAgICAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS51bnNoaWZ0KG5vZGUubGVmdClcbiAgICAgICAgaWYgKG5vZGUucmlnaHQpIHF1ZXVlLnVuc2hpZnQobm9kZS5yaWdodClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8qIGNvbXB1dGUgdGhlIGRlcHRoIGZyb20gbm9kZSAqL1xuICAgICAgICBsZXQgbERlcHRoID0gaGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgICAgIGxldCByRGVwdGggPSBoZWlnaHQobm9kZS5yaWdodCk7XG5cbiAgICAgICAgLyogdXNlIHRoZSBsYXJnZXIgb25lICovXG4gICAgICAgIGlmIChsRGVwdGggPiByRGVwdGgpXG4gICAgICAgICAgICByZXR1cm4gKGxEZXB0aCArIDEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIChyRGVwdGggKyAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlcHRoKHJvb3QsIG5vZGUpIHtcbiAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vZGUgIT0gcm9vdC5sZWZ0ICYmIG5vZGUgIT0gcm9vdC5yaWdodClcbiAgICB7XG4gICAgICAgICBcbiAgICAgICAgbGV0IGxEZXB0aCA9IGRlcHRoKHJvb3QubGVmdCk7XG4gICAgICAgIGxldCByRGVwdGggPSBkZXB0aChyb290LnJpZ2h0KTtcblxuICAgICAgICAvKiB1c2UgdGhlIGxhcmdlciBvbmUgKi9cbiAgICAgICAgaWYgKGxEZXB0aCA+IHJEZXB0aClcbiAgICAgICAgICAgIHJldHVybiAobERlcHRoICsgMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gKHJEZXB0aCArIDEpO1xuICAgIH1cbn1cblxubGV0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xuXG5sZXQgdHJlZSA9IG5ldyBUcmVlKGFycmF5KTtcbmlub3JkZXIodHJlZS5yb290KTtcbmNvbnNvbGUubG9nKGZpbmQodHJlZS5yb290LCA1KSlcbmNvbnNvbGUubG9nKGRlcHRoKHRyZWUucm9vdCwgZmluZCh0cmVlLnJvb3QsIDEpKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9