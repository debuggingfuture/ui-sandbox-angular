(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("console.log(\"entry\");\nangular.module('app', ['ngMessages'])\n.controller('MainCtrl', function($scope, $http){\n\tlet vm = this;\n\tvm.text = 'Hello world!';\n\n\t$scope.booking = {\n\t\temail: ''\n\t};\n\t$scope.login_form = function(){\n\t  \t$http({\n\t  \t\turl: '',\n\t  \t\tmethod: 'POST',\n\t  \t\tparams: {\n\t  \t\t\tusername: staff.username,\n\t  \t\t\tpassword: staff.password\n\t  \t\t}\n\t  \t}).success(function(data){\n\n\t  \t}).error(function(e){\n\n\t  \t});\n\t}\n})\n\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ }
/******/ ])
});
;