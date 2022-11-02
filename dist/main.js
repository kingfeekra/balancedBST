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
/* harmony export */   "inorder": () => (/* binding */ inorder)
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

let array = [1, 2, 3, 4, 5, 6, 7];

let tree = new Tree(array);
insert(10);
deleteRec(tree.root, 3);
(0,_traversal_js__WEBPACK_IMPORTED_MODULE_0__.inorder)(tree.root);
console.log(tree.root);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQU87QUFDUCx1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGFuY2VkYnN0Ly4vc3JjL3RyYXZlcnNhbC5qcyIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhbGFuY2VkYnN0Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwcmVPcmRlcihub2RlKVxue1xuICAgIGlmIChub2RlID09IG51bGwpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LndyaXRlKG5vZGUuZGF0YSArIFwiIFwiKTtcbiAgICBwcmVPcmRlcihub2RlLmxlZnQpO1xuICAgIHByZU9yZGVyKG5vZGUucmlnaHQpO1xufVxuXG5mdW5jdGlvbiBpbm9yZGVyKHJvb3QpXG57XG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5vcmRlcihyb290LmxlZnQpO1xuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUocm9vdC5kYXRhICsgXCIgXCIpO1xuICAgICAgICAgICAgaW5vcmRlcihyb290LnJpZ2h0KTtcbiAgICAgICAgfVxufVxuXG5leHBvcnQge2lub3JkZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5vcmRlciB9IGZyb20gXCIuL3RyYXZlcnNhbC5qc1wiO1xuXG5jbGFzcyBOb2RlXG57XG4gICAgY29uc3RydWN0b3IoZGF0YSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnIsIDAsIGFyci5sZW5ndGgtMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICAgIG5vZGUubGVmdCA9ICBidWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZCArIDEsIGVuZCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0KGtleSkge1xuICAgIGluc2VydFJlYyh0cmVlLnJvb3QsIGtleSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydFJlYyhyb290LCBrZXkpIHtcbiAgICBpZiAocm9vdCA9PSBudWxsKSB7ICAgICAgICAgLy9pZiB0cmVlIGlzIGVtcHR5LCByZXR1cm4gbmV3IG5vZGVcbiAgICAgICAgcm9vdCA9IG5ldyBOb2RlKGtleSk7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAoa2V5IDwgcm9vdC5kYXRhKSB7XG4gICAgICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyhyb290LmxlZnQsIGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA+IHJvb3QuZGF0YSkge1xuICAgICAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKHJvb3QucmlnaHQsIGtleSk7XG4gICAgfVxuICAgICAgICAvKiByZXR1cm4gdGhlICh1bmNoYW5nZWQpIG5vZGUgcG9pbnRlciAqL1xuICAgICAgICByZXR1cm4gcm9vdDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlS2V5KCkge1xuICAgIGRlbGV0ZVJlYyh0cmVlLnJvb3QsIGtleSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVJlYyhyb290LCBrZXkpIHtcbiAgICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKGtleSA8IHJvb3QuZGF0YSkge1xuICAgICAgICAgICAgcm9vdC5sZWZ0ID0gZGVsZXRlUmVjKHJvb3QubGVmdCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5kYXRhKSB7XG4gICAgICAgIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIG5vZGUgd2l0aCBvbmx5IG9uZSBjaGlsZCBvciBubyBjaGlsZFxuICAgICAgICBpZiAocm9vdC5sZWZ0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJvb3QucmlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QubGVmdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBub2RlIHdpdGggdHdvIGNoaWxkcmVuOiBHZXQgdGhlIGlub3JkZXJcbiAgICAgICAgLy8gc3VjY2Vzc29yIChzbWFsbGVzdCBpbiB0aGUgcmlnaHQgc3VidHJlZSlcbiAgICAgICAgcm9vdC5rZXkgPSBtaW5WYWx1ZShyb290LnJpZ2h0KTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGlub3JkZXIgc3VjY2Vzc29yXG4gICAgICAgIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwgcm9vdC5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cbmZ1bmN0aW9uIG1pblZhbHVlKHJvb3QpXG57XG4gICAgbGV0IG1pbnYgPSByb290LmRhdGE7XG4gICAgICAgIHdoaWxlIChyb290LmxlZnQgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbWludiA9IHJvb3QubGVmdC5kYXRhO1xuICAgICAgICAgICAgcm9vdCA9IHJvb3QubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWludjtcbn1cblxubGV0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xuXG5sZXQgdHJlZSA9IG5ldyBUcmVlKGFycmF5KTtcbmluc2VydCgxMCk7XG5kZWxldGVSZWModHJlZS5yb290LCAzKTtcbmlub3JkZXIodHJlZS5yb290KTtcbmNvbnNvbGUubG9nKHRyZWUucm9vdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9