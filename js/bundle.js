/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/modules/add-form.js":
/*!********************************************!*\
  !*** ./source/scripts/modules/add-form.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceCartIcon": function() { return /* binding */ replaceCartIcon; }
/* harmony export */ });
const replaceCartIcon = () => {
  const cartButton = document.querySelector('.add-form__button');
  const addForm = document.querySelector('.add-form');
  const addFormRadioBlock = document.querySelector('.add-form__radio-wrap');
  const addFormInputsBlock = document.querySelector('.add-form__input-wrap');
  let formData = null;
  let dataArray = null;
  let productInCart = true;
  let messageTemplate = null;

  const createMessage = template => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template.trim();
    return newElement.firstChild;
  };

  const showFormMessage = () => {
    messageTemplate = createMessage(`
		<p class="add-form__info">В корзине - ${dataArray.count}, товаров объёмом по - ${dataArray.size}</p>
		`);
    addForm.prepend(messageTemplate);
  };

  const cartButtonUpdate = () => {
    if (productInCart) {
      productInCart = false;
      cartButton.classList.remove('add-form__button--remove-from-cart');
      addFormRadioBlock.classList.remove('add-form__radio-wrap--hidden');
      addFormInputsBlock.classList.remove('add-form__input-wrap--hidden');
      cartButton.textContent = 'Добавить в корзину';
      messageTemplate !== null ? messageTemplate.remove() : null;
      messageTemplate = null;
    } else {
      productInCart = true;
      cartButton.classList.add('add-form__button--remove-from-cart');
      addFormRadioBlock.classList.add('add-form__radio-wrap--hidden');
      addFormInputsBlock.classList.add('add-form__input-wrap--hidden');
      cartButton.textContent = 'Удалить из корзины';
      showFormMessage();
    }
  };

  const checkProductStatus = () => {
    cartButtonUpdate();
  };

  const getDataFromForm = () => {
    formData = new FormData(addForm);
    dataArray = {
      size: formData.get('size'),
      count: formData.get('count')
    };
    console.log(dataArray);
  };

  function shopingCurtButtonHandler(evt) {
    evt.preventDefault();
    !productInCart ? getDataFromForm() : null;
    cartButtonUpdate();
  }

  addForm.addEventListener('submit', shopingCurtButtonHandler);
  checkProductStatus(); // for first launch
};



/***/ }),

/***/ "./source/scripts/modules/mobile-menu.js":
/*!***********************************************!*\
  !*** ./source/scripts/modules/mobile-menu.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileMenu": function() { return /* binding */ mobileMenu; }
/* harmony export */ });
const mobileMenu = () => {
  const siteBody = document.querySelector('.body');
  const navButton = document.querySelector('.nav__button');
  const navList = document.querySelector('.nav__list');
  const navIcon = document.querySelector('.btn-icon');
  let navigationIsOpen = false;

  const closeNavigation = () => {
    navigationIsOpen = false;
    navList.classList.remove('nav__list--open');
    navIcon.classList.remove('btn-icon--active');
    siteBody.classList.remove('body--scrolloff');
  };

  const openNavigation = evt => {
    navigationIsOpen = true;
    navList.classList.add('nav__list--open');
    navIcon.classList.add('btn-icon--active');
    siteBody.classList.add('body--scrolloff');
    window.addEventListener('resize', e => {
      if (window.screen.width > 800) {
        closeNavigation();
      }

      ;
    });
  };

  navButton.addEventListener('click', () => {
    navigationIsOpen ? closeNavigation() : openNavigation();
  });
};



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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile-menu */ "./source/scripts/modules/mobile-menu.js");
/* harmony import */ var _modules_add_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-form */ "./source/scripts/modules/add-form.js");


window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__.mobileMenu)();

  if (document.location.pathname.indexOf('product') > -1) {
    (0,_modules_add_form__WEBPACK_IMPORTED_MODULE_1__.replaceCartIcon)();
  } // if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
  //
  // }

});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map