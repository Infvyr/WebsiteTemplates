/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal.js */ \"./src/assets/js/components/modal.js\");\n/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/burger */ \"./src/assets/js/components/burger.js\");\n/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/textarea */ \"./src/assets/js/components/textarea.js\");\n/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_textarea__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/components/burger.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/burger.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst page= document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\n    if (!body.classList.contains('is-sidebar-on')) {\r\n        showSidebar();\r\n    } else {\r\n        closeSidebar();\r\n    }\r\n});\r\n\r\nfunction showSidebar(){\r\n    const mask = document.createElement('div');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click', closeSidebar);\r\n    page.appendChild(mask);\r\n\r\n    body.classList.add('is-sidebar-on');\r\n}\r\n\r\nfunction closeSidebar(){\r\n    body.classList.remove('is-sidebar-on');\r\n    document.querySelector('.page__mask').remove();\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/components/burger.js?");

/***/ }),

/***/ "./src/assets/js/components/modal.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/modal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initModals; });\nfunction initModals(){\r\n    openModals();\r\n    closeModals();\r\n    initCloseModals();\r\n}\r\n\r\n// open modal\r\nfunction openModals(){\r\n    const modalBtn = document.querySelectorAll('[data-modal]');\r\n    const body = document.body;\r\n\r\n    modalBtn.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            let $target = event.currentTarget;\r\n            let modalId = $target.getAttribute('data-modal');\r\n            let modal = document.getElementById(modalId);\r\n            let modalContent = modal.querySelector('.modal__content');\r\n\r\n            // do not close modal when click over it\r\n            modalContent.addEventListener('click', event => event.stopPropagation());\r\n\r\n            modal.classList.add('show');\r\n            body.classList.add('no-scroll');\r\n\r\n            setTimeout(function () {\r\n                modalContent.style.transform = 'none';\r\n                modalContent.style.opacity = +'1';\r\n            }, 1);\r\n        });\r\n    });\r\n}\r\n\r\n// close modal\r\nfunction closeModals(){\r\n    const modalClose = document.querySelectorAll('.modal__close');\r\n\r\n    modalClose.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            let currentModal = event.currentTarget.closest('.modal');\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n}\r\n\r\nfunction initCloseModals(){\r\n    const modal = document.querySelectorAll('.modal');\r\n\r\n    modal.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            let currentModal = event.currentTarget;\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n}\r\n\r\nfunction closeModal(currentModal){\r\n    currentModal.querySelector('.modal__content').removeAttribute('style');\r\n    const body = document.body;\r\n\r\n    setTimeout(() => {\r\n        if (currentModal.classList.contains('show')) {\r\n            currentModal.classList.remove('show');\r\n        }\r\n\r\n        if (body.classList.contains('no-scroll')) {\r\n            body.classList.remove('no-scroll');\r\n        }\r\n    }, 300);\r\n}\r\n\r\ninitModals();\n\n//# sourceURL=webpack:///./src/assets/js/components/modal.js?");

/***/ }),

/***/ "./src/assets/js/components/textarea.js":
/*!**********************************************!*\
  !*** ./src/assets/js/components/textarea.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item => {\r\n    const textAreaHeight = item.offsetHeight;\r\n    \r\n    item.addEventListener('input', event => {\r\n        let $current = event.currentTarget;\r\n\r\n        $current.style.height = `${textAreaHeight}px`;\r\n        $current.style.height = $current.scrollHeight + 'px';\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/components/textarea.js?");

/***/ })

/******/ });