/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Otica-rio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://Otica-rio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Otica-rio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_1__);\n// Javascript for image slider manual\n\n\nlet btns = document.querySelectorAll(\".btn\");\nlet slides = document.querySelectorAll(\".slide\");\n\nlet manualNav = function (manual) {\n  slides.forEach(slide => {\n    slide.classList.remove(\"active\");\n    btns.forEach(btn => {\n      btn.classList.remove(\"active\");\n    });\n  });\n  slides[manual].classList.add(\"active\");\n  btns[manual].classList.add(\"active\");\n};\n\nbtns.forEach((btn, i) => {\n  btn.addEventListener(\"click\", () => {\n    manualNav(i);\n    currentSlide = i;\n  });\n}); // Javascript for image slider autoplay navigation\n\nlet repeat = function (activeClass) {\n  let active = document.getElementsByClassName(\"active\");\n  let i = 1;\n\n  let repeater = () => {\n    setTimeout(function () {\n      [...active].forEach(activeSlide => {\n        activeSlide.classList.remove(\"active\");\n      });\n      slides[i].classList.add(\"active\");\n      btns[i].classList.add(\"active\");\n      i++;\n\n      if (slides.length == i) {\n        i = 0;\n      }\n\n      if (i >= slides.length) {\n        return;\n      }\n\n      repeater();\n    }, 5000);\n  };\n\n  repeater();\n};\n\nrepeat();\n\n//# sourceURL=webpack://Otica-rio/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

eval("const menu = document.querySelector(\".hidden-menu\");\nconst menuIcon = document.querySelector(\".hamburguer\"); // const headeMobile = document.querySelector(\"header\");\n//menu mobile\n\nmenu.addEventListener(\"click\", function (e) {\n  menu.classList.remove(\"display-menu\");\n});\nmenuIcon.addEventListener(\"click\", function () {\n  menu.classList.toggle(\"display-menu\"); // headeMobile.classList.toggle(\"mobile\");\n});\n\n//# sourceURL=webpack://Otica-rio/./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/masculino.jpg */ \"./src/images/masculino.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/feminino.jpg */ \"./src/images/feminino.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images//kid.jpg */ \"./src/images/kid.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/p2.png */ \"./src/images/p2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave-small.png */ \"./src/images/wave-small.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave-medium.png */ \"./src/images/wave-medium.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave-large.png */ \"./src/images/wave-large.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/testimonials-bg.jpg */ \"./src/images/testimonials-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave-small-reversed.png */ \"./src/images/wave-small-reversed.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave-medium-reversed.png */ \"./src/images/wave-medium-reversed.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave-large-reversed.png */ \"./src/images/wave-large-reversed.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*footer */\\nfooter {\\n  padding: 2.5rem 0;\\n  background: #111111 top no-repeat;\\n  font-size: 1.4rem;\\n  text-align: center;\\n  color: whitesmoke; }\\n  footer .icone {\\n    display: flex; }\\n    footer .icone i {\\n      margin-right: 10px;\\n      font-size: 20px; }\\n  footer .menu-row,\\n  footer ul {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start; }\\n  footer .menus {\\n    display: flex;\\n    justify-content: space-between;\\n    text-align: start; }\\n    footer .menus li:not(:last-child) {\\n      margin-bottom: 10px; }\\n    footer .menus li a {\\n      font-size: 1.7rem;\\n      color: #666;\\n      transition: 0.4s; }\\n      footer .menus li a:hover {\\n        color: whitesmoke; }\\n    footer .menus .row {\\n      width: 50%;\\n      display: flex;\\n      justify-content: space-around;\\n      text-align: start; }\\n    footer .menus span {\\n      text-transform: uppercase;\\n      margin: 10px 0;\\n      font-size: 1.6rem;\\n      font-weight: 600;\\n      color: #eb648c; }\\n  footer .redes-sociais {\\n    display: flex;\\n    flex-direction: column; }\\n    footer .redes-sociais i.fab {\\n      color: whitesmoke; }\\n  footer .telefone,\\n  footer .email {\\n    display: flex;\\n    justify-content: space-around; }\\n  footer .contato {\\n    display: flex;\\n    flex-direction: column;\\n    width: 50%;\\n    text-transform: uppercase;\\n    margin: 10px; }\\n    footer .contato p {\\n      font-size: 1.1rem; }\\n    footer .contato h1 {\\n      padding-top: -10px; }\\n\\n.copy {\\n  font-size: 1.7rem;\\n  color: #666;\\n  background: #111111 top no-repeat; }\\n  .copy a {\\n    color: #666; }\\n    .copy a:hover {\\n      color: white; }\\n\\n@media screen and (max-width: 660px) {\\n  footer .menus {\\n    flex-direction: column; }\\n    footer .menus .row {\\n      width: 100%;\\n      justify-content: space-around; }\\n    footer .menus .contato {\\n      margin-top: 20px;\\n      width: 100%;\\n      justify-content: space-around; }\\n      footer .menus .contato .telefone {\\n        margin-bottom: 40px; } }\\n\\n@media screen and (max-width: 412px) {\\n  footer .menus .row {\\n    justify-content: space-between; }\\n  footer .menus .contato {\\n    margin-top: 20px;\\n    justify-content: space-between; } }\\n\\n/*SLIDER*/\\n.slider-show {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background: white;\\n  margin: 0 auto; }\\n  .slider-show h1 {\\n    font-size: 3rem;\\n    text-transform: uppercase;\\n    margin-bottom: 50px;\\n    color: rgba(0, 0, 0, 0.7);\\n    font-family: \\\"Aldrich\\\", sans-serif;\\n    font-weight: 600;\\n    text-align: center; }\\n  .slider-show .img-slider {\\n    border-radius: 10px;\\n    position: relative;\\n    width: 800px;\\n    height: 500px;\\n    margin: 10px;\\n    margin: 0 auto; }\\n    .slider-show .img-slider .slide {\\n      z-index: 1;\\n      position: absolute;\\n      width: 100%;\\n      clip-path: circle(0% at 0 50%); }\\n      .slider-show .img-slider .slide img {\\n        z-index: 1;\\n        width: 100%;\\n        border-radius: 5px; }\\n      .slider-show .img-slider .slide.active {\\n        clip-path: circle(150% at 0 50%);\\n        transition: 2s;\\n        transition-property: clip-path; }\\n    .slider-show .img-slider .switch {\\n      z-index: 2;\\n      position: absolute;\\n      display: flex;\\n      bottom: 30px;\\n      left: 50%;\\n      transform: translateX(-50%); }\\n      .slider-show .img-slider .switch .btn {\\n        background: rgba(255, 255, 255, 0.5);\\n        width: 12px;\\n        height: 12px;\\n        margin: 10px;\\n        border-radius: 50%;\\n        cursor: pointer; }\\n        .slider-show .img-slider .switch .btn.active {\\n          background: #2696e9;\\n          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); }\\n\\n/*SLIDER*/\\n@media (max-width: 820px) {\\n  .slider-show .img-slider {\\n    width: 600px;\\n    height: 375px; }\\n    .slider-show .img-slider .navigation {\\n      bottom: 25px; }\\n      .slider-show .img-slider .navigation .btn {\\n        width: 10px;\\n        height: 10px;\\n        margin: 8px; } }\\n\\n@media (max-width: 620px) {\\n  .slider-show .img-slider {\\n    width: 400px;\\n    height: 250px; }\\n    .slider-show .img-slider .navigation {\\n      bottom: 15px; }\\n      .slider-show .img-slider .navigation .btn {\\n        width: 8px;\\n        height: 8px;\\n        margin: 6px; } }\\n\\n@media (max-width: 420px) {\\n  .slider-show .img-slider {\\n    width: 320px;\\n    height: 200px; }\\n    .slider-show .img-slider .navigation {\\n      bottom: 10px; } }\\n\\n.experience-outdoors {\\n  padding: 0; }\\n\\n.title-heading {\\n  text-align: center;\\n  text-transform: uppercase;\\n  margin-bottom: 10rem;\\n  color: rgba(0, 0, 0, 0.7); }\\n  .title-heading h3 {\\n    font-size: 1.4rem; }\\n  .title-heading h1 {\\n    font-family: \\\"Aldrich\\\", sans-serif;\\n    font-size: 2rem;\\n    margin: 0.5rem 0 1rem; }\\n  .title-heading p {\\n    text-transform: lowercase; }\\n\\n.activities-grid {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\\n  grid-gap: 2.5rem; }\\n  .activities-grid .activities-grid-item {\\n    height: 40rem;\\n    padding: 5rem;\\n    color: #fafafa;\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    cursor: pointer;\\n    z-index: 1; }\\n    .activities-grid .activities-grid-item::before {\\n      content: \\\"\\\";\\n      position: absolute;\\n      z-index: 3;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n      background-image: linear-gradient(135deg, rgba(49, 24, 131, 0.9) 0%, rgba(72, 56, 149, 0.8) 10%);\\n      z-index: -1; }\\n    .activities-grid .activities-grid-item.star-gazing {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center no-repeat;\\n      background-size: cover; }\\n    .activities-grid .activities-grid-item.hiking {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center no-repeat;\\n      background-size: cover; }\\n    .activities-grid .activities-grid-item.camping {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center no-repeat;\\n      background-size: cover; }\\n    .activities-grid .activities-grid-item i {\\n      font-size: 4rem;\\n      color: #eb648c; }\\n    .activities-grid .activities-grid-item h1 {\\n      font-family: \\\"Aldrich\\\", sans-serif;\\n      font-size: 1.7rem;\\n      text-transform: uppercase;\\n      margin: 2rem 0; }\\n    .activities-grid .activities-grid-item p {\\n      color: rgba(0, 0, 0, 0.7);\\n      line-height: 1.5; }\\n\\n@media screen and (max-width: 660px) {\\n  .title-heading {\\n    margin: 3rem 0 5rem 0; }\\n  .activities-grid {\\n    margin-bottom: 5rem; } }\\n\\n.header {\\n  width: 100%;\\n  height: 80vh;\\n  background: linear-gradient(135deg, rgba(49, 24, 131, 0.9) 0%, rgba(72, 56, 149, 0.8) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") center no-repeat;\\n  background-size: cover;\\n  position: relative; }\\n  .header::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    left: 0;\\n    bottom: -3px;\\n    width: 100%;\\n    z-index: 1;\\n    height: 4.7rem;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") center;\\n    background-size: cover; }\\n  .header .main-message {\\n    width: 100%;\\n    height: auto;\\n    color: #fafafa;\\n    text-transform: uppercase;\\n    transform: translateY(20%); }\\n    .header .main-message h3 {\\n      font-size: 1.6rem; }\\n    .header .main-message h1 {\\n      font-family: \\\"Aldrich\\\", sans-serif;\\n      font-size: 4rem;\\n      margin: 1rem 0; }\\n    .header .main-message p {\\n      text-transform: lowercase;\\n      line-height: 1.4;\\n      text-align: justify; }\\n      .header .main-message p span {\\n        text-transform: uppercase; }\\n  .header .cta a {\\n    cursor: pointer; }\\n  .header .cta .btn-pink {\\n    background-color: #eb648c;\\n    font-size: 1.2rem;\\n    border-radius: 2rem;\\n    color: #fafafa;\\n    display: inline-block;\\n    margin-top: 2rem;\\n    padding: 1rem 2.5rem;\\n    text-transform: uppercase;\\n    transition: background-color 650ms; }\\n    .header .cta .btn-pink.btn-pink:hover {\\n      background-color: #ce587b; }\\n\\n@media screen and (min-width: 1200px) {\\n  .header {\\n    height: 75vh; }\\n  .main-message {\\n    transform: translateY(40%); } }\\n\\n@media screen and (max-width: 660px) {\\n  .main-message {\\n    margin-top: -40px; } }\\n\\n@media screen and (max-width: 980px) {\\n  .header {\\n    padding-top: 80px; } }\\n\\n@media screen and (min-width: 350px) {\\n  .main-message {\\n    transform: translateY(40%); } }\\n\\n@media screen and (min-width: 470px) {\\n  .header::before {\\n    height: 9.4rem;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n    background-size: cover; } }\\n\\n@media screen and (min-width: 950px) {\\n  .header::before {\\n    height: 22.7rem;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n    background-size: cover; }\\n  .main-message {\\n    transform: translateY(20%); } }\\n\\n/* testemonials */\\n.testimonials {\\n  width: 100%;\\n  height: 80vh;\\n  background: linear-gradient(135deg, rgba(49, 24, 131, 0.9) 0%, rgba(72, 56, 149, 0.8) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") center no-repeat fixed;\\n  position: relative; }\\n  .testimonials::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: -3px;\\n    left: 0;\\n    width: 100%;\\n    height: 4.7rem;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") center no-repeat;\\n    background-size: cover; }\\n  .testimonials .testimonial {\\n    width: 100%;\\n    color: #fafafa;\\n    position: absolute;\\n    top: 55%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    text-align: center;\\n    margin-top: 5%; }\\n    .testimonials .testimonial .testimonial-text-box {\\n      padding: 0 1.5rem;\\n      margin-bottom: 2rem;\\n      position: relative; }\\n      .testimonials .testimonial .testimonial-text-box i {\\n        position: absolute;\\n        top: -8rem;\\n        left: 50%;\\n        transform: translateX(-50%);\\n        font-size: 8rem;\\n        color: #eb648c;\\n        opacity: 0.5;\\n        z-index: -1; }\\n    .testimonials .testimonial .testimonial-customer img {\\n      width: 14rem;\\n      border-radius: 100%;\\n      border: 3px solid #eb648c;\\n      margin-bottom: 20px; }\\n\\n@media screen and (max-width: 950px) {\\n  .testimonial {\\n    margin-top: 0; } }\\n\\n@media screen and (min-width: 470px) {\\n  .testimonials::before {\\n    height: 9.4rem;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n    background-size: cover; } }\\n\\n@media screen and (min-width: 950px) {\\n  .testimonials::before {\\n    height: 22.7rem;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n    background-size: cover; } }\\n\\nheader {\\n  width: 100%;\\n  max-width: 98rem;\\n  position: relative;\\n  margin: 0 auto; }\\n\\n.navigation {\\n  margin: 0 auto;\\n  position: absolute;\\n  width: 100%;\\n  z-index: 2;\\n  padding: 30px; }\\n  .navigation .checkbtn {\\n    font-size: 30px;\\n    color: whitesmoke;\\n    margin-right: 40px;\\n    cursor: pointer;\\n    display: none; }\\n  .navigation ul {\\n    list-style: none;\\n    display: flex;\\n    justify-content: flex-end; }\\n    .navigation ul li a {\\n      text-decoration: none;\\n      text-transform: uppercase;\\n      color: white;\\n      padding: 7px 15px;\\n      border-radius: 2px;\\n      transition: 0.3s;\\n      font-size: 1.3rem; }\\n\\n@media (max-width: 918px) {\\n  .navigation {\\n    padding: 10px;\\n    position: fixed;\\n    background: rgba(0, 0, 0, 0.7); }\\n    .navigation .checkbtn {\\n      display: flex;\\n      justify-content: flex-end; }\\n    .navigation ul {\\n      position: fixed;\\n      z-index: 100;\\n      width: 100%;\\n      height: 100vh;\\n      background: #383737;\\n      left: -100%;\\n      transition: all 0.5s;\\n      align-items: center;\\n      flex-direction: column;\\n      justify-content: flex-start;\\n      color: white;\\n      top: 50px; }\\n      .navigation ul.display-menu {\\n        left: 0; }\\n      .navigation ul li {\\n        margin: 50px 0; }\\n        .navigation ul li a {\\n          color: white;\\n          font-size: 1.7rem; } }\\n\\n@media screen and (max-width: 535px) {\\n  .navigation .checkbtn {\\n    margin-right: 0; } }\\n\\n.album-de-fotos h1 {\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-size: 3rem;\\n  font-family: \\\"Aldrich\\\", sans-serif;\\n  margin-bottom: 50px;\\n  color: rgba(0, 0, 0, 0.7); }\\n\\n.album-de-fotos .clientes {\\n  width: 100%;\\n  height: auto;\\n  display: grid;\\n  grid-gap: 20px;\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }\\n  .album-de-fotos .clientes div {\\n    width: 220px;\\n    height: 200px;\\n    /* border: 2px solid  rgba(0, 0, 0, 0.7); */\\n    overflow: hidden;\\n    justify-self: center; }\\n\\n@media screen and (max-width: 474px) {\\n  .clientes div {\\n    justify-self: center; } }\\n\\n.google-maps h3 {\\n  font-size: 2rem;\\n  margin-bottom: 20px;\\n  color: #e96565;\\n  text-align: center; }\\n\\n.google-maps #map {\\n  height: 300px;\\n  width: 100%;\\n  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4); }\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none; }\\n\\nhtml {\\n  font-family: \\\"Nurito\\\", sans-serif;\\n  font-size: 10px;\\n  box-sizing: border-box;\\n  scroll-behavior: smooth; }\\n\\nbody#display-content {\\n  display: block !important; }\\n\\nul {\\n  list-style: none; }\\n\\np {\\n  font-size: 1.6rem; }\\n\\nimg {\\n  width: 100%;\\n  max-width: 100%;\\n  height: auto; }\\n\\nsection {\\n  padding: 5rem 0; }\\n\\n.container {\\n  width: 100%;\\n  max-width: 98rem;\\n  margin: 0 auto;\\n  padding: 0 1.5rem; }\\n\\n.btn-pink {\\n  background-color: #eb648c;\\n  font-size: 1.2rem;\\n  border-radius: 2rem;\\n  color: #fafafa;\\n  display: inline-block;\\n  margin-top: 2rem;\\n  padding: 1rem 2.5rem;\\n  text-transform: uppercase;\\n  transition: background-color 650ms; }\\n  .btn-pink.btn-pink:hover {\\n    background-color: #ce587b; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Otica-rio/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Otica-rio/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Otica-rio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Otica-rio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Otica-rio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Otica-rio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Otica-rio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Otica-rio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/feminino.jpg":
/*!*********************************!*\
  !*** ./src/images/feminino.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"081f4fa9231a10360944.jpg\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/feminino.jpg?");

/***/ }),

/***/ "./src/images/kid.jpg":
/*!****************************!*\
  !*** ./src/images/kid.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"181673323cc39665b13f.jpg\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/kid.jpg?");

/***/ }),

/***/ "./src/images/masculino.jpg":
/*!**********************************!*\
  !*** ./src/images/masculino.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"849b210c1c17982c47dd.jpg\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/masculino.jpg?");

/***/ }),

/***/ "./src/images/p2.png":
/*!***************************!*\
  !*** ./src/images/p2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1a81c05123a9ff3d3be9.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/p2.png?");

/***/ }),

/***/ "./src/images/testimonials-bg.jpg":
/*!****************************************!*\
  !*** ./src/images/testimonials-bg.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e7a3ebab9b84b0bfc8a1.jpg\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/testimonials-bg.jpg?");

/***/ }),

/***/ "./src/images/wave-large-reversed.png":
/*!********************************************!*\
  !*** ./src/images/wave-large-reversed.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9bbfc86a686b63a7e66b.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/wave-large-reversed.png?");

/***/ }),

/***/ "./src/images/wave-large.png":
/*!***********************************!*\
  !*** ./src/images/wave-large.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f0a4bda7e91112ef5f39.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/wave-large.png?");

/***/ }),

/***/ "./src/images/wave-medium-reversed.png":
/*!*********************************************!*\
  !*** ./src/images/wave-medium-reversed.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aa908146e3c97194bc8c.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/wave-medium-reversed.png?");

/***/ }),

/***/ "./src/images/wave-medium.png":
/*!************************************!*\
  !*** ./src/images/wave-medium.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"41ba003855267e17cfe7.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/wave-medium.png?");

/***/ }),

/***/ "./src/images/wave-small-reversed.png":
/*!********************************************!*\
  !*** ./src/images/wave-small-reversed.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e617029dfb6e6be8aa05.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/wave-small-reversed.png?");

/***/ }),

/***/ "./src/images/wave-small.png":
/*!***********************************!*\
  !*** ./src/images/wave-small.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b65cd1af3621225d4e93.png\";\n\n//# sourceURL=webpack://Otica-rio/./src/images/wave-small.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;