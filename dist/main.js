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

function find(root, key) {
    if (root == null ||root.data == key) {
        return root;
    }
    if (root.data < key) {
       return find(root.right, key);
    }
    return find(root.left, key);
}

let array = [1, 2, 3, 4, 5, 6, 7];

let tree = new Tree(array);
insert(10);
deleteRec(tree.root, 3);
(0,_traversal_js__WEBPACK_IMPORTED_MODULE_0__.inorder)(tree.root);
console.log(find(tree.root, 5))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFPO0FBQ1AsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy90cmF2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJlT3JkZXIobm9kZSlcbntcbiAgICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC53cml0ZShub2RlLmRhdGEgKyBcIiBcIik7XG4gICAgcHJlT3JkZXIobm9kZS5sZWZ0KTtcbiAgICBwcmVPcmRlcihub2RlLnJpZ2h0KTtcbn1cblxuZnVuY3Rpb24gaW5vcmRlcihyb290KVxue1xuICAgIGlmIChyb290ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlub3JkZXIocm9vdC5sZWZ0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKHJvb3QuZGF0YSArIFwiIFwiKTtcbiAgICAgICAgICAgIGlub3JkZXIocm9vdC5yaWdodCk7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IHtpbm9yZGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGlub3JkZXIgfSBmcm9tIFwiLi90cmF2ZXJzYWwuanNcIjtcblxuY2xhc3MgTm9kZVxue1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpXG4gICAge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGFycikge1xuICAgICAgICB0aGlzLnJvb3QgPSBidWlsZFRyZWUoYXJyLCAwLCBhcnIubGVuZ3RoLTEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA+IGVuZClcbiAgICB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShhcnJbbWlkXSk7XG5cbiAgICBub2RlLmxlZnQgPSAgYnVpbGRUcmVlKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICAgIG5vZGUucmlnaHQgPSBidWlsZFRyZWUoYXJyLCBtaWQgKyAxLCBlbmQpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGluc2VydChrZXkpIHtcbiAgICBpbnNlcnRSZWModHJlZS5yb290LCBrZXkpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwga2V5KSB7XG4gICAgaWYgKHJvb3QgPT0gbnVsbCkgeyAgICAgICAgIC8vaWYgdHJlZSBpcyBlbXB0eSwgcmV0dXJuIG5ldyBub2RlXG4gICAgICAgIHJvb3QgPSBuZXcgTm9kZShrZXkpO1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKGtleSA8IHJvb3QuZGF0YSkge1xuICAgICAgICByb290LmxlZnQgPSBpbnNlcnRSZWMocm9vdC5sZWZ0LCBrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPiByb290LmRhdGEpIHtcbiAgICAgICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBrZXkpO1xuICAgIH1cbiAgICAgICAgLyogcmV0dXJuIHRoZSAodW5jaGFuZ2VkKSBub2RlIHBvaW50ZXIgKi9cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUtleSgpIHtcbiAgICBkZWxldGVSZWModHJlZS5yb290LCBrZXkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVSZWMocm9vdCwga2V5KSB7XG4gICAgaWYgKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGlmIChrZXkgPCByb290LmRhdGEpIHtcbiAgICAgICAgICAgIHJvb3QubGVmdCA9IGRlbGV0ZVJlYyhyb290LmxlZnQsIGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA+IHJvb3QuZGF0YSkge1xuICAgICAgICByb290LnJpZ2h0ID0gZGVsZXRlUmVjKHJvb3QucmlnaHQsIGtleSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBub2RlIHdpdGggb25seSBvbmUgY2hpbGQgb3Igbm8gY2hpbGRcbiAgICAgICAgaWYgKHJvb3QubGVmdCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb290LnJpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm9kZSB3aXRoIHR3byBjaGlsZHJlbjogR2V0IHRoZSBpbm9yZGVyXG4gICAgICAgIC8vIHN1Y2Nlc3NvciAoc21hbGxlc3QgaW4gdGhlIHJpZ2h0IHN1YnRyZWUpXG4gICAgICAgIHJvb3Qua2V5ID0gbWluVmFsdWUocm9vdC5yaWdodCk7XG5cbiAgICAgICAgLy8gRGVsZXRlIHRoZSBpbm9yZGVyIHN1Y2Nlc3NvclxuICAgICAgICByb290LnJpZ2h0ID0gZGVsZXRlUmVjKHJvb3QucmlnaHQsIHJvb3QuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xufVxuXG5mdW5jdGlvbiBtaW5WYWx1ZShyb290KVxue1xuICAgIGxldCBtaW52ID0gcm9vdC5kYXRhO1xuICAgICAgICB3aGlsZSAocm9vdC5sZWZ0ICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1pbnYgPSByb290LmxlZnQuZGF0YTtcbiAgICAgICAgICAgIHJvb3QgPSByb290LmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbnY7XG59XG5cbmZ1bmN0aW9uIGZpbmQocm9vdCwga2V5KSB7XG4gICAgaWYgKHJvb3QgPT0gbnVsbCB8fHJvb3QuZGF0YSA9PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGlmIChyb290LmRhdGEgPCBrZXkpIHtcbiAgICAgICByZXR1cm4gZmluZChyb290LnJpZ2h0LCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gZmluZChyb290LmxlZnQsIGtleSk7XG59XG5cbmxldCBhcnJheSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcblxubGV0IHRyZWUgPSBuZXcgVHJlZShhcnJheSk7XG5pbnNlcnQoMTApO1xuZGVsZXRlUmVjKHRyZWUucm9vdCwgMyk7XG5pbm9yZGVyKHRyZWUucm9vdCk7XG5jb25zb2xlLmxvZyhmaW5kKHRyZWUucm9vdCwgNSkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9