/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(1);

	var _intro = __webpack_require__(3);

	var intro = _interopRequireWildcard(_intro);

	__webpack_require__(4);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	tmpl.arg = 'data';

	$(document).ready(function () {
		$('#app').addClass('on');
		intro.prepend('.content-container', 'intro-template', data.landing.intro);
		setTimeout(function () {
			intro.flipper();
		}, 500);

		$('.intro-container').on('click', function () {
			$(this).css('display', 'none');
			intro.prepend('.content-container', 'nav-template', data.nav);
			intro.render('.padded-content', 'welcome-template', data.nav);

			var categories = ["about", "work", "portfolio", "contact"];

			var _loop = function _loop() {
				var category = categories[i];
				$('.' + category).click(function () {
					$('.content').removeClass('about portfolio work contact');
					$('.nav-vertical').removeClass('about portfolio work contact');
					$('.footer').removeClass('about portfolio work contact');
					$('.' + category + '-nav-div .nav-vertical').addClass('' + category);
					setTimeout(function () {
						$('.content').addClass('' + category);
						$('.footer').addClass('' + category);
						intro.render('.padded-content', category + '-template', data.nav);
					}, 300);
				});
			};

			for (var i = 0; i < categories.length; i++) {
				_loop();
			}
		});

		// $( '.about' ).click(function() {
		//   $('.content').addClass('about');
		// });

		// })
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * jQuery JavaScript Library v2.2.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-22T19:11Z
	 */

	(function (global, factory) {

		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

		// Support: Firefox 18+
		// Can't be in strict mode, several libs including ASP.NET trace
		// the stack via arguments.caller.callee and Firefox dies if
		// you try to trace through "use strict" call chains. (#13335)
		//"use strict";
		var arr = [];

		var document = window.document;

		var _slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var support = {};

		var version = "2.2.1",
		   

		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},
		   

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		   

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
		   

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {

			// The current version of jQuery being used
			jquery: version,

			constructor: jQuery,

			// Start with an empty selector
			selector: "",

			// The default length of a jQuery object is 0
			length: 0,

			toArray: function toArray() {
				return _slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {
				return num != null ?

				// Return just the one element from the set
				num < 0 ? this[num + this.length] : this[num] :

				// Return all the elements in a clean array
				_slice.call(this);
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			each: function each(callback) {
				return jQuery.each(this, callback);
			},

			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},

			first: function first() {
				return this.eq(0);
			},

			last: function last() {
				return this.eq(-1);
			},

			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function end() {
				return this.prevObject || this.constructor();
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;

				// Skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			// Extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {

				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {

					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
								target[name] = copy;
							}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({

			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			// Assume jQuery is ready without the ready module
			isReady: true,

			error: function error(msg) {
				throw new Error(msg);
			},

			noop: function noop() {},

			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray,

			isWindow: function isWindow(obj) {
				return obj != null && obj === obj.window;
			},

			isNumeric: function isNumeric(obj) {

				// parseFloat NaNs numeric-cast false positives (null|true|false|"")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				// adding 1 corrects loss of precision from parseFloat (#15100)
				var realStringObj = obj && obj.toString();
				return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
			},

			isPlainObject: function isPlainObject(obj) {

				// Not plain objects:
				// - Any object or value whose internal [[Class]] property is not "[object Object]"
				// - DOM nodes
				// - window
				if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}

				if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}

				// If the function hasn't returned already, we're confident that
				// |obj| is a plain object, created by {} or constructed with new Object
				return true;
			},

			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},

			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}

				// Support: Android<4.0, iOS<6 (functionish RegExp)
				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},

			// Evaluates a script in a global context
			globalEval: function globalEval(code) {
				var script,
				    indirect = eval;

				code = jQuery.trim(code);

				if (code) {

					// If the code includes a valid, prologue position
					// strict mode pragma, execute code by injecting a
					// script tag into the document.
					if (code.indexOf("use strict") === 1) {
						script = document.createElement("script");
						script.text = code;
						document.head.appendChild(script).parentNode.removeChild(script);
					} else {

						// Otherwise, avoid the DOM node creation, insertion
						// and removal by using an indirect global eval

						indirect(code);
					}
				}
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Support: IE9-11+
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			each: function each(obj, callback) {
				var length,
				    i = 0;

				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}

				return obj;
			},

			// Support: Android<4.1
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];

				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}

					// Go through every key on the object,
				} else {
						for (i in elems) {
							value = callback(elems[i], i, arg);

							if (value != null) {
								ret.push(value);
							}
						}
					}

				// Flatten any nested arrays
				return concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function proxy(fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: Date.now,

			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});

		// JSHint would error on this code due to the Symbol not being defined in ES5.
		// Defining this global in .jshintrc would create a danger of using the global
		// unguarded in another place, it seems safer to just disable JSHint for these
		// three lines.
		/* jshint ignore: start */
		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
		}
		/* jshint ignore: end */

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArrayLike(obj) {

			// Support: iOS 8.2 (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v2.2.1
	  * http://sizzlejs.com/
	  *
	  * Copyright jQuery Foundation and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2015-10-17
	  */
		function (window) {

			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
			   

			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
			   

			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
			   

			// General-purpose constants
			MAX_NEGATIVE = 1 << 31,
			   

			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
			   
			// Use a stripped-down indexOf as it's faster than native
			// http://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			   

			// Regular expressions

			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
			   

			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			   

			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",
			   

			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
			   

			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
			   

			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
			   

			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			};

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    nidselect,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,
				   

				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;

				results = results || [];

				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {

					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;

					if (documentIsHTML) {

						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

							// ID selector
							if (m = match[1]) {

								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}

									// Element context
								} else {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

											results.push(elem);
											return results;
										}
									}

								// Type selector
							} else if (match[2]) {
									push.apply(results, context.getElementsByTagName(selector));
									return results;

									// Class selector
								} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

										push.apply(results, context.getElementsByClassName(m));
										return results;
									}
						}

						// Take advantage of querySelectorAll
						if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;

								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {

									// Capture the context ID, setting it first if necessary
									if (nid = context.getAttribute("id")) {
										nid = nid.replace(rescape, "\\$&");
									} else {
										context.setAttribute("id", nid = expando);
									}

									// Prefix every selector in the list
									groups = tokenize(selector);
									i = groups.length;
									nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
									while (i--) {
										groups[i] = nidselect + " " + toSelector(groups[i]);
									}
									newSelector = groups.join(",");

									// Expand context for sibling selectors
									newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
								}

							if (newSelector) {
								try {
									push.apply(results, newContext.querySelectorAll(newSelector));
									return results;
								} catch (qsaError) {} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
	   * Create key-value caches of limited size
	   * @returns {function(string, object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created div and expects a boolean result
	   */
			function assert(fn) {
				var div = document.createElement("div");

				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
					// release memory in IE
					div = null;
				}
			}

			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    parent,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);

				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if ((parent = document.defaultView) && parent.top !== parent) {
					// Support: IE 11
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);

						// Support: IE 9 - 10 only
					} else if (parent.attachEvent) {
							parent.attachEvent("onunload", unloadHandler);
						}
				}

				/* Attributes
	   ---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});

				/* getElement(s)By*
	   ---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(document.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});

				// ID find and filter
				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);
							return m ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					// Support: IE6/7
					// getElementById is not reliable as a find shortcut
					delete Expr.find["ID"];

					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);

						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
							return context.querySelectorAll(tag);
						}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
					   
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See http://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibing-combinator selector` fails
						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (div) {
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				/* Sorting
	   ---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {

					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

					// Otherwise we know they are disconnected
					1;

					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
							return siblingCheck(a, b);
						}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],
				   
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
								Sizzle.error(match[0]);
							}

						return match;
					},

					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
							// Get excess from tokenize (recursively)
							excess = tokenize(unquoted, true)) && (
							// advance to the next closing parenthesis
							excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

								// excess is a negative index
								match[0] = match[0].slice(0, excess);
								match[2] = unquoted.slice(0, excess);
							}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {

									// Seek `elem` from a previously-cached index

									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (

									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}

									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});

													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

													uniqueCache[type] = [dirruns, diff];
												}

												if (node === elem) {
													break;
												}
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function root(elem) {
						return elem === docElem;
					},

					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},

					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},

					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

								if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[dir] = newCache;

									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
					   

					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
					   

					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
							matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
							if (postFinder) {
								postFinder(null, results, matcherOut, xml);
							} else {
								push.apply(results, matcherOut);
							}
						}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
				   

				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
					   
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),
					   
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context === document || context || outermost;
					}

					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;

					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {

					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
								context = context.parentNode;
							}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (div1) {
				// Should return 1, but returns 4 (following)
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;

		var dir = function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};

		var _siblings = function _siblings(n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		};

		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;

		var risSimple = /^.[^:#\[\.,]*$/;

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					/* jshint -W018 */
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}

				qualifier = jQuery.filter(qualifier, elements);
			}

			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    len = this.length,
				    ret = [],
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		// Initialize a jQuery object

		// A central reference to the root jQuery(document)
		var rootjQuery,
		   

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {

								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
										this.attr(match, context[match]);
									}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
							elem = document.getElementById(match[2]);

							// Support: Blackberry 4.6
							// gEBID returns nodes no longer in the document (#6963)
							if (elem && elem.parentNode) {

								// Inject the element directly into the jQuery object
								this.length = 1;
								this[0] = elem;
							}

							this.context = document;
							this.selector = selector;
							return this;
						}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
						return (context || root).find(selector);

						// HANDLE: $(expr, context)
						// (which is just equivalent to: $(context).find(expr)
					} else {
							return this.constructor(context).find(selector);
						}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
					this.context = this[0] = selector;
					this.length = 1;
					return this;

					// HANDLE: $(function)
					// Shortcut for document ready
				} else if (jQuery.isFunction(selector)) {
						return root.ready !== undefined ? root.ready(selector) :

						// Execute immediately if ready is not present
						selector(jQuery);
					}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		};

		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;

		// Initialize central reference
		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		   

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},

			// Determine the position of an element within the set
			index: function index(elem) {

				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// Index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				// Locate the position of the desired element
				return indexOf.call(this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},

			add: function add(selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return _siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return _siblings(elem.firstChild);
			},
			contents: function contents(elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {

					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.uniqueSort(matched);
					}

					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnotwhite = /\S+/g;

		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

			var // Flag to know if list is currently firing
			firing,
			   

			// Last fire value for non-forgettable lists
			memory,
			   

			// Flag to know if list was already fired
			_fired,
			   

			// Flag to prevent firing
			_locked,
			   

			// Actual callback list
			list = [],
			   

			// Queue of execution data for repeatable lists
			queue = [],
			   

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
			   

			// Fire callbacks
			fire = function fire() {

				// Enforce single-firing
				_locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				_fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {

						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if (_locked) {

					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];

						// Otherwise, this object is spent
					} else {
							list = "";
						}
				}
			},
			   

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {

						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}

						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (jQuery.isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && jQuery.type(arg) !== "string") {

									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);

						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function remove() {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);

							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function empty() {
					if (list) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function disable() {
					_locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function disabled() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function lock() {
					_locked = queue = [];
					if (!memory) {
						list = memory = "";
					}
					return this;
				},
				locked: function locked() {
					return !!_locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (!_locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};

			return self;
		};

		jQuery.extend({

			Deferred: function Deferred(func) {
				var tuples = [

				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};

				// Keep pipe for back-compat
				_promise.pipe = _promise.then;

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];

					// promise[ done | fail | progress ] = list.add
					_promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {

							// state = [ resolved | rejected ]
							_state = stateString;

							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}

					// deferred[ resolve | reject | notify ]
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				_promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function when(subordinate /* , ..., subordinateN */) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,
				   

				// the count of uncompleted subordinates
				remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
				   

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
				   

				// Update function for both resolve and progress values
				updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;

				// Add listeners to Deferred subordinates; treat others as resolved
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
						} else {
							--remaining;
						}
					}
				}

				// If we're not waiting on anything, resolve the master
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}

				return deferred.promise();
			}
		});

		// The deferred used on DOM ready
		var readyList;

		jQuery.fn.ready = function (fn) {

			// Add the callback
			jQuery.ready.promise().done(fn);

			return this;
		};

		jQuery.extend({

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			// Handle when the DOM is ready
			ready: function ready(wait) {

				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);

				// Trigger any bound ready events
				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});

		/**
	  * The ready event handler and self cleanup method
	  */
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);
			jQuery.ready();
		}

		jQuery.ready.promise = function (obj) {
			if (!readyList) {

				readyList = jQuery.Deferred();

				// Catch cases where $(document).ready() is called
				// after the browser event has already occurred.
				// Support: IE9-10 only
				// Older IE sometimes signals "interactive" too soon
				if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

					// Handle it asynchronously to allow scripts the opportunity to delay ready
					window.setTimeout(jQuery.ready);
				} else {

					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", completed);

					// A fallback to window.onload, that will always work
					window.addEventListener("load", completed);
				}
			}
			return readyList.promise(obj);
		};

		// Kick off the DOM ready check even if the user does not
		jQuery.ready.promise();

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
					chainable = true;

					if (!jQuery.isFunction(value)) {
						raw = true;
					}

					if (bulk) {

						// Bulk operations run against the entire set
						if (raw) {
							fn.call(elems, value);
							fn = null;

							// ...except when executing function values
						} else {
								bulk = fn;
								fn = function fn(elem, key, value) {
									return bulk.call(jQuery(elem), value);
								};
							}
					}

					if (fn) {
						for (; i < len; i++) {
							fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
						}
					}
				}

			return chainable ? elems :

			// Gets
			bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
		};
		var acceptData = function acceptData(owner) {

			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			/* jshint -W018 */
			return owner.nodeType === 1 || owner.nodeType === 9 || ! +owner.nodeType;
		};

		function Data() {
			this.expando = jQuery.expando + Data.uid++;
		}

		Data.uid = 1;

		Data.prototype = {

			register: function register(owner, initial) {
				var value = initial || {};

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if (owner.nodeType) {
					owner[this.expando] = value;

					// Otherwise secure it in a non-enumerable, non-writable property
					// configurability must be true to allow the property to be
					// deleted with the delete operator
				} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							writable: true,
							configurable: true
						});
					}
				return owner[this.expando];
			},
			cache: function cache(owner) {

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (!acceptData(owner)) {
					return {};
				}

				// Check if the owner object already has a cache
				var value = owner[this.expando];

				// If not, create one
				if (!value) {
					value = {};

					// We can accept data for non-element nodes in modern browsers,
					// but we should not, see #8335.
					// Always return an empty object.
					if (acceptData(owner)) {

						// If it is a node unlikely to be stringify-ed or looped over
						// use plain assignment
						if (owner.nodeType) {
							owner[this.expando] = value;

							// Otherwise secure it in a non-enumerable property
							// configurable must be true to allow the property to be
							// deleted when data is removed
						} else {
								Object.defineProperty(owner, this.expando, {
									value: value,
									configurable: true
								});
							}
					}
				}

				return value;
			},
			set: function set(owner, data, value) {
				var prop,
				    cache = this.cache(owner);

				// Handle: [ owner, key, value ] args
				if (typeof data === "string") {
					cache[data] = value;

					// Handle: [ owner, { properties } ] args
				} else {

						// Copy the properties one-by-one to the cache object
						for (prop in data) {
							cache[prop] = data[prop];
						}
					}
				return cache;
			},
			get: function get(owner, key) {
				return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
			},
			access: function access(owner, key, value) {
				var stored;

				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {

					stored = this.get(owner, key);

					return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
				}

				// When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);

				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    name,
				    camel,
				    cache = owner[this.expando];

				if (cache === undefined) {
					return;
				}

				if (key === undefined) {
					this.register(owner);
				} else {

					// Support array or space separated string of keys
					if (jQuery.isArray(key)) {

						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = key.concat(key.map(jQuery.camelCase));
					} else {
						camel = jQuery.camelCase(key);

						// Try the string as a key before any manipulation
						if (key in cache) {
							name = [key, camel];
						} else {

							// If a key with the spaces exists, use it.
							// Otherwise, create an array by matching non-whitespace
							name = camel;
							name = name in cache ? [name] : name.match(rnotwhite) || [];
						}
					}

					i = name.length;

					while (i--) {
						delete cache[name[i]];
					}
				}

				// Remove the expando if there's no more data
				if (key === undefined || jQuery.isEmptyObject(cache)) {

					// Support: Chrome <= 35-45+
					// Webkit & Blink performance suffers when deleting properties
					// from DOM nodes, so set to undefined instead
					// https://code.google.com/p/chromium/issues/detail?id=378607
					if (owner.nodeType) {
						owner[this.expando] = undefined;
					} else {
						delete owner[this.expando];
					}
				}
			},
			hasData: function hasData(owner) {
				var cache = owner[this.expando];
				return cache !== undefined && !jQuery.isEmptyObject(cache);
			}
		};
		var dataPriv = new Data();

		var dataUser = new Data();

		//	Implementation Summary
		//
		//	1. Enforce API surface and semantic compatibility with 1.9.x branch
		//	2. Improve the module's maintainability by reducing the storage
		//		paths to a single mechanism.
		//	3. Use the same single mechanism to support "private" and "user" data.
		//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		//	5. Avoid exposing implementation details on user objects (eg. expando properties)
		//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /[A-Z]/g;

		function dataAttr(elem, key, data) {
			var name;

			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					dataUser.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function hasData(elem) {
				return dataUser.hasData(elem) || dataPriv.hasData(elem);
			},

			data: function data(elem, name, _data) {
				return dataUser.access(elem, name, _data);
			},

			removeData: function removeData(elem, name) {
				dataUser.remove(elem, name);
			},

			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to dataPriv methods, these can be deprecated.
			_data: function _data(elem, name, data) {
				return dataPriv.access(elem, name, data);
			},

			_removeData: function _removeData(elem, name) {
				dataPriv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = dataUser.get(elem);

						if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {

								// Support: IE11+
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							dataPriv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						dataUser.set(this, key);
					});
				}

				return access(this, function (value) {
					var data, camelKey;

					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {

						// Attempt to get data from the cache
						// with the key as-is
						data = dataUser.get(elem, key) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());

						if (data !== undefined) {
							return data;
						}

						camelKey = jQuery.camelCase(key);

						// Attempt to get data from the cache
						// with the key camelized
						data = dataUser.get(elem, camelKey);
						if (data !== undefined) {
							return data;
						}

						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, camelKey, undefined);
						if (data !== undefined) {
							return data;
						}

						// We tried really hard, but the data doesn't exist.
						return;
					}

					// Set the data...
					camelKey = jQuery.camelCase(key);
					this.each(function () {

						// First, attempt to store a copy or reference of any
						// data that might've been store with a camelCased key.
						var data = dataUser.get(this, camelKey);

						// For HTML5 data-* attribute interop, we have to
						// store property names with dashes in a camelCase form.
						// This might not apply to all properties...*
						dataUser.set(this, camelKey, value);

						// *... In the case of properties that might _actually_
						// have dashes, we need to also store a copy of that
						// unchanged property.
						if (key.indexOf("-") > -1 && data !== undefined) {
							dataUser.set(this, key, value);
						}
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function removeData(key) {
				return this.each(function () {
					dataUser.remove(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = dataPriv.get(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = dataPriv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function dequeue(elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// Clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// Not public - generate a queueHooks object, or return the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						dataPriv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// Ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},

			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = dataPriv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHidden = function isHidden(elem, el) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};

		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale = 1,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
			   

			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

			if (initialInUnit && initialInUnit[3] !== unit) {

				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];

				// Make sure we update the tween properties later on
				valueParts = valueParts || [];

				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;

				do {

					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					initialInUnit = initialInUnit / scale;
					jQuery.style(elem, prop, initialInUnit + unit);

					// Update scale, tolerating zero or NaN from tween.cur()
					// Break the loop if scale is unchanged or perfect, or if we've just had enough.
				} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
			}

			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;

				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}
		var rcheckableType = /^(?:checkbox|radio)$/i;

		var rtagName = /<([\w:-]+)/;

		var rscriptType = /^$|\/(?:java|ecma)script/i;

		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {

			// Support: IE9
			option: [1, "<select multiple='multiple'>", "</select>"],

			// XHTML parsers do not magically insert elements in the
			// same way that tag soup parsers do. So we cannot shorten
			// this by omitting <tbody> or other required elements.
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		// Support: IE9
		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function getAll(context, tag) {

			// Support: IE9-11+
			// Use typeof to avoid zero-argument method invocation on host objects (#15151)
			var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];

			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
			}
		}

		var rhtml = /<|&#?\w+;/;

		function buildFragment(elems, context, scripts, selection, ignored) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));

							// Convert html into DOM nodes
						} else {
								tmp = tmp || fragment.appendChild(context.createElement("div"));

								// Deserialize a standard representation
								tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
								wrap = wrapMap[tag] || wrapMap._default;
								tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

								// Descend through wrappers to the right content
								j = wrap[0];
								while (j--) {
									tmp = tmp.lastChild;
								}

								// Support: Android<4.1, PhantomJS<2
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(nodes, tmp.childNodes);

								// Remember the top-level container
								tmp = fragment.firstChild;

								// Ensure the created nodes are orphaned (#12392)
								tmp.textContent = "";
							}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while (elem = nodes[i++]) {

				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		}

		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			// Support: Android 4.0-4.3, Safari<=5.1
			// Check state lost if the name is set (#11217)
			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			// Support: Safari<=5.1, Android<4.2
			// Older WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			// Support: IE<=11+
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();

		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		// Support: IE9
		// See #13393 for more info
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}

		function _on(elem, types, selector, data, fn, one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-Object, selector, data )
				if (typeof selector !== "string") {

					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					_on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}

			if (data == null && fn == null) {

				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {

					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {

					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {

					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};

				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}

		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {

			global: {},

			add: function add(elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.get(elem);

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {

						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				// Handle multiple events separated by a space
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},

			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove data and the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					dataPriv.remove(elem, "handle events");
				}
			},

			dispatch: function dispatch(event) {

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix(event);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

						// Triggered event must either 1) have no namespace, or 2) have namespace(s)
						// a subset or equal to those in the bound event (both can have no namespace).
						if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function handlers(event, _handlers) {
				var i,
				    matches,
				    sel,
				    handleObj,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;

				// Support (at least): Chrome, IE9
				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				//
				// Support: Firefox<=42+
				// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
				if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {

					for (; cur !== this; cur = cur.parentNode || this) {

						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			// Includes some event props shared by KeyEvent and MouseEvent
			props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {

					// Add which for key events
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
				filter: function filter(event, original) {
					var eventDoc,
					    doc,
					    body,
					    button = original.button;

					// Calculate pageX/Y if missing and clientX/Y available
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}

					return event;
				}
			},

			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}

				// Create a writable copy of the event object and normalize some properties
				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];

				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

				event = new jQuery.Event(originalEvent);

				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}

				// Support: Cordova 2.5 (WebKit) (#13255)
				// All events should have a target; Cordova deviceready doesn't
				if (!event.target) {
					event.target = document;
				}

				// Support: Safari 6.0+, Chrome<28
				// Target should not be a text node (#504, #13143)
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}

				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},

			special: {
				load: {

					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {

					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {

					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},

					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function postDispatch(event) {

						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			}
		};

		jQuery.removeEvent = function (elem, type, handle) {

			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		};

		jQuery.Event = function (src, props) {

			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ? returnTrue : returnFalse;

				// Event type
			} else {
					this.type = src;
				}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function preventDefault() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://code.google.com/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		jQuery.fn.extend({
			on: function on(types, selector, data, fn) {
				return _on(this, types, selector, data, fn);
			},
			one: function one(types, selector, data, fn) {
				return _on(this, types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {

					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {

					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			}
		});

		var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		   

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
		   

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		// Manipulating tables requires a tbody
		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);

			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			// 1. Copy private data: events, handlers, etc.
			if (dataPriv.hasData(src)) {
				pdataOld = dataPriv.access(src);
				pdataCur = dataPriv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			// 2. Copy user data
			if (dataUser.hasData(src)) {
				udataOld = dataUser.access(src);
				udataCur = jQuery.extend({}, udataOld);

				dataUser.set(dest, udataCur);
			}
		}

		// Fix IE bugs, see support tests
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;

				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
					dest.defaultValue = src.defaultValue;
				}
		}

		function domManip(collection, args, callback, ignored) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}

			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {

								// Support: Android<4.1, PhantomJS<2
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(collection[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {

									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
								}
							}
						}
					}
				}
			}

			return collection;
		}

		function _remove(elem, selector, keepData) {
			var node,
			    nodes = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;

			for (; (node = nodes[i]) != null; i++) {
				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}

				if (node.parentNode) {
					if (keepData && jQuery.contains(node.ownerDocument, node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}

			return elem;
		}

		jQuery.extend({
			htmlPrefilter: function htmlPrefilter(html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},

			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				// Fix IE cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				// Return the cloned set
				return clone;
			},

			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (acceptData(elem)) {
						if (data = elem[dataPriv.expando]) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
											jQuery.removeEvent(elem, type, data.handle);
										}
								}
							}

							// Support: Chrome <= 35-45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataPriv.expando] = undefined;
						}
						if (elem[dataUser.expando]) {

							// Support: Chrome <= 35-45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataUser.expando] = undefined;
						}
					}
				}
			}
		});

		jQuery.fn.extend({

			// Keep domManip exposed until 3.0 (gh-2225)
			domManip: domManip,

			detach: function detach(selector) {
				return _remove(this, selector, true);
			},

			remove: function remove(selector) {
				return _remove(this, selector);
			},

			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function append() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function prepend() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function before() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function after() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			empty: function empty() {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {

						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));

						// Remove any remaining nodes
						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = jQuery.htmlPrefilter(value);

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function replaceWith() {
				var ignored = [];

				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;

					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}

					// Force callback invocation
				}, ignored);
			}
		});

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Support: QtWebKit
					// .get() because push.apply(_, arraylike) throws
					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});

		var iframe,
		    elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

		/**
	  * Retrieve the actual display of a element
	  * @param {String} name nodeName of the element
	  * @param {Object} doc Document object
	  */

		// Called only from within defaultDisplay
		function actualDisplay(name, doc) {
			var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			    display = jQuery.css(elem[0], "display");

			// We don't have any data stored on the element,
			// so use "detach" method as fast way to get rid of the element
			elem.detach();

			return display;
		}

		/**
	  * Try to determine the default display value of an element
	  * @param {String} nodeName
	  */
		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];

			if (!display) {
				display = actualDisplay(nodeName, doc);

				// If the simple way fails, read from inside an iframe
				if (display === "none" || !display) {

					// Use the already-created iframe if possible
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = iframe[0].contentDocument;

					// Support: IE
					doc.write();
					doc.close();

					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}

				// Store the correct default display
				elemdisplay[nodeName] = display;
			}

			return display;
		}
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function getStyles(elem) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if (!view || !view.opener) {
				view = window;
			}

			return view.getComputedStyle(elem);
		};

		var swap = function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		var documentElement = document.documentElement;

		(function () {
			var pixelPositionVal,
			    boxSizingReliableVal,
			    pixelMarginRightVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}

			// Support: IE9-11+
			// Style of cloned element affects source element cloned (#8908)
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
			container.appendChild(div);

			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computeStyleTests() {
				div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
				div.innerHTML = "";
				documentElement.appendChild(container);

				var divStyle = window.getComputedStyle(div);
				pixelPositionVal = divStyle.top !== "1%";
				reliableMarginLeftVal = divStyle.marginLeft === "2px";
				boxSizingReliableVal = divStyle.width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = divStyle.marginRight === "4px";

				documentElement.removeChild(container);
			}

			jQuery.extend(support, {
				pixelPosition: function pixelPosition() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computeStyleTests();
					return pixelPositionVal;
				},
				boxSizingReliable: function boxSizingReliable() {
					if (boxSizingReliableVal == null) {
						computeStyleTests();
					}
					return boxSizingReliableVal;
				},
				pixelMarginRight: function pixelMarginRight() {

					// Support: Android 4.0-4.3
					// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
					// since that compresses better and they're computed together anyway.
					if (boxSizingReliableVal == null) {
						computeStyleTests();
					}
					return pixelMarginRightVal;
				},
				reliableMarginLeft: function reliableMarginLeft() {

					// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
					if (boxSizingReliableVal == null) {
						computeStyleTests();
					}
					return reliableMarginLeftVal;
				},
				reliableMarginRight: function reliableMarginRight() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
					    marginDiv = div.appendChild(document.createElement("div"));

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					documentElement.appendChild(container);

					ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);

					documentElement.removeChild(container);
					div.removeChild(marginDiv);

					return ret;
				}
			});
		})();

		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);
			ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// Support: IE9
			// getPropertyValue is only needed for .css('filter') (#12537)
			if (computed) {

				// A tribute to the "awesome hack by Dean Edwards"
				// Android Browser returns percentage for some values,
				// but width seems to be reliably pixels.
				// This is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}

		function addGetHookIf(conditionFn, hookFn) {

			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					if (conditionFn()) {

						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}

					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style;

		// Return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(name) {

			// Shortcut for names that are not vendor prefixed
			if (name in emptyStyle) {
				return name;
			}

			// Check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}

		function setPositiveNumber(elem, value, subtract) {

			// Any relative (+/-) values have already been
			// normalized at this point
			var matches = rcssNum.exec(value);
			return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
			    val = 0;

			for (; i < 4; i += 2) {

				// Both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {

					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// At this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {

					// At this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// At this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {

			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			// Support: IE11 only
			// In IE 11 fullscreen elements inside of an iframe have
			// 100x too small dimensions (gh-1764).
			if (document.msFullscreenElement && window.top !== window) {

				// Support: IE11 only
				// Running getBoundingClientRect on a disconnected node
				// in IE throws an error.
				if (elem.getClientRects().length) {
					val = Math.round(elem.getBoundingClientRect()[name] * 100);
				}
			}

			// Some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {

				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// Check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}

			// Use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;

			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				values[index] = dataPriv.get(elem, "olddisplay");
				display = elem.style.display;
				if (show) {

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);

					if (display !== "none" || !hidden) {
						dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}

			return elements;
		}

		jQuery.extend({

			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {

							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				"float": "cssFloat"
			},

			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {

				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// Gets hook for the prefixed version, then unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);

					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);

						// Fixes bug #9237
						type = "number";
					}

					// Make sure that null and NaN values aren't set (#7116)
					if (value == null || value !== value) {
						return;
					}

					// If a number was passed in, add the unit (except for certain CSS properties)
					if (type === "number") {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}

					// Support: IE9-11+
					// background-* props affect original clone's values
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

						style[name] = value;
					}
				} else {

					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// Try prefixed name followed by the unprefixed name
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				// Convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Make numeric if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {

						// Certain elements can have dimension info if we invisibly show them
						// but it must have a current display style that would benefit
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function set(elem, value, extra) {
					var matches,
					    styles = extra && getStyles(elem),
					    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

					// Convert to pixels if value adjustment is needed
					if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

						elem.style[name] = value;
						value = jQuery.css(elem, name);
					}

					return setPositiveNumber(elem, value, subtract);
				}
			};
		});

		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				})) + "px";
			}
		});

		// Support: Android 2.3
		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				return swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
					   

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;

					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}

					// Passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails.
					// Simple values such as "10px" are parsed to Float;
					// complex values such as "rotate(1rad)" are returned as-is.
					result = jQuery.css(tween.elem, tween.prop, "");

					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {

					// Use step hook for back compat.
					// Use cssHook if its there.
					// Use .style if available and use plain properties where available.
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Support: IE9
		// Panic based approach to setting things on disconnected nodes
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};

		jQuery.fx = Tween.prototype.init;

		// Back Compat <1.8 extension point
		jQuery.fx.step = {};

		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;

		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			// If we include width, step value is 1 to do all cssExpand values,
			// otherwise step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {

					// We're done with this property
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			/* jshint validthis: true */
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = dataPriv.get(elem, "fxshow");

			// Handle queue: false promises
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {

					// Ensure the complete handler is called before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// Height/width overflow pass
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {

				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE9-10 do not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				display = jQuery.css(elem, "display");

				// Test default display if display is currently "none"
				checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
					style.display = "inline-block";
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			// show/hide pass
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {

						// If there is dataShow left over from a stopped hide or show
						// and we are going to proceed with show, we should pretend to be hidden
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

					// Any non-fx value stops us from restoring the original display value
				} else {
						display = undefined;
					}
			}

			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", {});
				}

				// Store state if its toggle - enables .stop().toggle() to "reverse"
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;

					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}

				// If this is a noop like .hide().hide(), restore an overwritten display value
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
					style.display = display;
				}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// Not quite $.extend, this won't overwrite existing keys.
					// Reusing 'index' because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {

				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
				   

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
					   

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// Resolve when we played the last frame; otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (jQuery.isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
					}
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {
			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},

			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnotwhite);
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},

			prefilters: [defaultPrefilter],

			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

			// Normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {

				// Show any hidden elements after setting opacity to 0
				return this.filter(isHidden).css("opacity", 0).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || dataPriv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = dataPriv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// Start the next in the queue if the last step wasn't forced.
					// Timers currently will call their complete callbacks, which
					// will dequeue but only if they were gotoEnd.
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = dataPriv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// Enable finishing flag on private data
					data.finish = true;

					// Empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					// Look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// Look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// Turn off finishing flag
					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			window.clearInterval(timerId);

			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			// Default speed
			_default: 400
		};

		// Based off of the plugin by Clint Helfers, with permission.
		// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};

		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			// Support: iOS<=5.1, Android<=4.2+
			// Default value for a checkbox should be "on"
			support.checkOn = input.value !== "";

			// Support: IE<=11+
			// Must access selectedIndex to make default options select
			support.optSelected = opt.selected;

			// Support: Android<=2.3
			// Options inside disabled selects are incorrectly marked as disabled
			select.disabled = true;
			support.optDisabled = !opt.disabled;

			// Support: IE<=11+
			// An input loses its value after becoming a radio
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();

		var boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function attr(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}

				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
				}

				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}

					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					elem.setAttribute(name, value + "");
					return value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},

			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;

						// Boolean attributes get special treatment (#10870)
						if (jQuery.expr.match.bool.test(name)) {

							// Set corresponding property to false
							elem[propName] = false;
						}

						elem.removeAttribute(name);
					}
				}
			}
		});

		// Hooks for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {

					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			};
		});

		var rfocusable = /^(?:input|select|textarea|button)$/i,
		    rclickable = /^(?:a|area)$/i;

		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					return elem[name] = value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				return elem[name];
			},

			propHooks: {
				tabIndex: {
					get: function get(elem) {

						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");

						return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
					}
				}
			},

			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});

		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		var rclass = /[\t\r\n\f]/g;

		function getClass(elem) {
			return elem.getAttribute && elem.getAttribute("class") || "";
		}

		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnotwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}

				if (!arguments.length) {
					return this.attr("class", "");
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnotwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);

						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {

								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}

				return this.each(function () {
					var className, i, self, classNames;

					if (type === "string") {

						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = value.match(rnotwhite) || [];

						while (className = classNames[i++]) {

							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}

						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
							className = getClass(this);
							if (className) {

								// Store className if set
								dataPriv.set(this, "__className__", className);
							}

							// If the element has a class name or if we're passed `false`,
							// then remove the whole classname (if there was one, the above saved it).
							// Otherwise bring back whatever was previously saved (if anything),
							// falling back to the empty string if nothing was stored.
							if (this.setAttribute) {
								this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
							}
						}
				});
			},

			hasClass: function hasClass(selector) {
				var className,
				    elem,
				    i = 0;

				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
						return true;
					}
				}

				return false;
			}
		});

		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace(rreturn, "") :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {

						// Support: IE<11
						// option.value not trimmed (#14858)
						return jQuery.trim(elem.value);
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// IE8-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) && (

							// Don't return options that are disabled or in a disabled optgroup
							support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];
							if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
								optionSet = true;
							}
						}

						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		// Return jQuery for attributes-only inclusion

		var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

		jQuery.extend(jQuery.event, {

			trigger: function trigger(event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") > -1) {

					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

						// Call a native DOM method on the target with the same name name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			// Piggyback on a donor event to simulate a different one
			simulate: function simulate(type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				});

				jQuery.event.trigger(e, null, elem);

				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}

		});

		jQuery.fn.extend({

			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});

		support.focusin = "onfocusin" in window;

		// Support: Firefox
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome, Safari
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};

				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						dataPriv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							dataPriv.remove(doc, fix);
						} else {
							dataPriv.access(doc, fix, attaches);
						}
					}
				};
			});
		}
		var location = window.location;

		var nonce = jQuery.now();

		var rquery = /\?/;

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		jQuery.parseJSON = function (data) {
			return JSON.parse(data + "");
		};

		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml;
			if (!data || typeof data !== "string") {
				return null;
			}

			// Support: IE9
			try {
				xml = new window.DOMParser().parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		   

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		   

		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},
		   

		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},
		   

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),
		   

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement("a");
		originAnchor.href = location.href;

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {

			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

				if (jQuery.isFunction(func)) {

					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {

						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
								(structure[dataType] = structure[dataType] || []).push(func);
							}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {

				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
			   

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			// Convert to each sequential dataType
			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {

					// There's only work to do if current dataType is non-auto
					if (current === "*") {

						current = prev;

						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {

							// Seek a direct converter
							conv = converters[prev + " " + current] || converters["* " + current];

							// If none found, seek a pair
							if (!conv) {
								for (conv2 in converters) {

									// If conv2 outputs current
									tmp = conv2.split(" ");
									if (tmp[1] === current) {

										// If prev can be converted to accepted input
										conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
										if (conv) {

											// Condense equivalence converters
											if (conv === true) {
												conv = converters[conv2];

												// Otherwise, insert the intermediate dataType
											} else if (converters[conv2] !== true) {
													current = tmp[0];
													dataTypes.unshift(tmp[1]);
												}
											break;
										}
									}
								}
							}

							// Apply converter (if not an equivalence)
							if (conv !== true) {

								// Unless errors are allowed to bubble, catch and return them
								if (conv && s.throws) {
									response = conv(response);
								} else {
									try {
										response = conv(response);
									} catch (e) {
										return {
											state: "parsererror",
											error: conv ? e : "No conversion from " + prev + " to " + current
										};
									}
								}
							}
						}
				}
			}

			return { state: "success", data: response };
		}

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: location.href,
				type: "GET",
				isLocal: rlocalProtocol.test(location.protocol),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function ajax(url, options) {

				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var transport,
				   

				// URL without anti-cache param
				cacheURL,
				   

				// Response headers
				responseHeadersString,
				    responseHeaders,
				   

				// timeout handle
				timeoutTimer,
				   

				// Url cleanup var
				urlAnchor,
				   

				// To know if global events are to be dispatched
				fireGlobals,
				   

				// Loop variable
				i,
				   

				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
				   

				// Callbacks context
				callbackContext = s.context || s,
				   

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
				   

				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
				   

				// Status-dependent callbacks
				_statusCode = s.statusCode || {},
				   

				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},
				   

				// The jqXHR state
				state = 0,
				   

				// Default abort message
				strAbort = "canceled",
				   

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {

									// Lazy-add the new callback in a way that preserves old ones
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

				// A cross-domain request is in order when the origin doesn't match the current origin.
				if (s.crossDomain == null) {
					urlAnchor = document.createElement("a");

					// Support: IE8-11+
					// IE throws exception if url is malformed, e.g. http://example.com:80x/
					try {
						urlAnchor.href = s.url;

						// Support: IE8-11+
						// Anchor's host property isn't correctly set when s.url is relative
						urlAnchor.href = urlAnchor.href;
						s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
					} catch (e) {

						// If there is an error parsing the URL, assume it is crossDomain,
						// it can be rejected by the transport if it is invalid
						s.crossDomain = true;
					}
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (state === 2) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;

				// More options handling for requests with no content
				if (!s.hasContent) {

					// If data is available, append data to url
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add anti-cache in url if needed
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + nonce++) :

						// Otherwise add one to the end
						cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {

					// Abort if not done already and return
					return jqXHR.abort();
				}

				// Aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					// If request was aborted inside ajaxSend, stop there
					if (state === 2) {
						return jqXHR;
					}

					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {

						// Propagate exception as error if not done
						if (state < 2) {
							done(-1, e);

							// Simply rethrow otherwise
						} else {
								throw e;
							}
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Called once
					if (state === 2) {
						return;
					}

					// State is "done" now
					state = 2;

					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);

					// If successful, handle type chaining
					if (isSuccess) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";

							// if not modified
						} else if (status === 304) {
								statusText = "notmodified";

								// If we have data, let's convert it
							} else {
									statusText = response.state;
									success = response.data;
									error = response.error;
									isSuccess = !error;
								}
					} else {

						// Extract error from statusText and normalize for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {

				// Shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});

		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,

				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		};

		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				var wrap;

				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}

				if (this[0]) {

					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});

		jQuery.expr.filters.hidden = function (elem) {
			return !jQuery.expr.filters.visible(elem);
		};
		jQuery.expr.filters.visible = function (elem) {

			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			// Use OR instead of AND as the element is not visible if either is true
			// See tickets #10406 and #13132
			return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
		};

		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {

				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {

						// Treat each array item as a scalar.
						add(prefix, v);
					} else {

						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {

				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {

				// Serialize scalar item.
				add(prefix, obj);
			}
		}

		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {

				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&").replace(r20, "+");
		};

		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {

					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		jQuery.ajaxSettings.xhr = function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		};

		var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var _callback, errorCallback;

			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr();

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						// Callback
						_callback = function callback(type) {
							return function () {
								if (_callback) {
									_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {

										// Support: IE9
										// On a manual native abort, IE9 throws
										// errors on any property access that is not readyState
										if (typeof xhr.status !== "number") {
											complete(0, "error");
										} else {
											complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status, xhr.statusText);
										}
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						// Listen to events
						xhr.onload = _callback();
						errorCallback = xhr.onerror = _callback("error");

						// Support: IE9
						// Use onreadystatechange to replace onabort
						// to handle uncaught aborts
						if (xhr.onabort !== undefined) {
							xhr.onabort = errorCallback;
						} else {
							xhr.onreadystatechange = function () {

								// Check readyState before timeout as it changes
								if (xhr.readyState === 4) {

									// Allow onerror to be called first,
									// but that will not handle a native abort
									// Also, save errorCallback to a variable
									// as xhr.onerror cannot be accessed
									window.setTimeout(function () {
										if (_callback) {
											errorCallback();
										}
									});
								}
							};
						}

						// Create the abort callback
						_callback = _callback("abort");

						try {

							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {

							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (_callback) {
								throw e;
							}
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});

		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {

			// This transport only deals with cross domain requests
			if (s.crossDomain) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").prop({
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});

						// Use native DOM manipulation to avoid our domManip AJAX trickery
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// Force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {

					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);

						// Otherwise restore preexisting value
					} else {
							window[callbackName] = overwritten;
						}

					// Save back as free
					if (s[callbackName]) {

						// Make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// Save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});

		// Support: Safari 8+
		// In Safari 8 documents created via document.implementation.createHTMLDocument
		// collapse sibling forms: the second one becomes a child of the first one.
		// Because of that, this security measure has to be disabled in Safari 8.
		// https://bugs.webkit.org/show_bug.cgi?id=137337
		support.createHTMLDocument = function () {
			var body = document.implementation.createHTMLDocument("").body;
			body.innerHTML = "<form></form><form></form>";
			return body.childNodes.length === 2;
		}();

		// Argument "data" should be string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			context = context || (support.createHTMLDocument ? document.implementation.createHTMLDocument("") : document);

			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		// Keep a copy of the old load method
		var _load = jQuery.fn.load;

		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}

			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off > -1) {
				selector = jQuery.trim(url.slice(off));
				url = url.slice(0, off);
			}

			// If it's a function
			if (jQuery.isFunction(params)) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
					type = "POST";
				}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {

					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(self, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}

			return this;
		};

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		/**
	  * Gets a window from an element
	  */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}

		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				// Need to be able to calculate position if either
				// top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {

					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    elem = this[0],
				    box = { top: 0, left: 0 },
				    doc = elem && elem.ownerDocument;

				if (!doc) {
					return;
				}

				docElem = doc.documentElement;

				// Make sure it's not a disconnected DOM node
				if (!jQuery.contains(docElem, elem)) {
					return box;
				}

				box = elem.getBoundingClientRect();
				win = getWindow(doc);
				return {
					top: box.top + win.pageYOffset - docElem.clientTop,
					left: box.left + win.pageXOffset - docElem.clientLeft
				};
			},

			position: function position() {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
				// because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {

					// Assume getBoundingClientRect is there when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {

					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}

				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			// This method will return documentElement in the following cases:
			// 1) For the element inside the iframe without offsetParent, this method will return
			//    documentElement of the parent window
			// 2) For the hidden or detached element
			// 3) For body or html element, i.e. in case of the html node - it will return itself
			//
			// but those exceptions were never presented as a real life use-cases
			// and might be considered as more preferable results.
			//
			// This logic, however, is not guaranteed and can change at any point in the future
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent;

					while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || documentElement;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length);
			};
		});

		// Support: Safari<7-8+, Chrome<37-44+
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
		// getComputedStyle returns percent when specified for top/left/bottom/right;
		// rather than make the css module depend on the offset module, just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

				// Margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {

							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});

		jQuery.fn.extend({

			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {

				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			},
			size: function size() {
				return this.length;
			}
		});

		jQuery.fn.andSelf = jQuery.fn.addBack;

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.

		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

		var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
		   

		// Map over the $ in case of overwrite
		_$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		// Expose jQuery and $ identifiers, even in AMD
		// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.render = render;
	exports.prepend = prepend;
	exports.flipper = flipper;
	exports.clicker = clicker;
	function render(element, template, data) {
		$(element).html(tmpl(template, data));
		console.log("working");
	}

	function prepend(element, template, data) {
		$(element).prepend(tmpl(template, data));
		console.log("working");
	}

	function flipper() {
		$('.flipper').addClass('init-intro');
		$('.intro-text').addClass('init-intro');
		$('.start').addClass('init-intro');
	}

	function clicker() {
		var cat = data.nav;
		for (var i = 0; i < cat.length; i++) {
			console.log(cat[i]);
			$('.' + cat[i]).on('click', function () {
				console.log(cat[i]);
			});
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'CaviarDreams-Bold';\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(9) + ") format(\"truetype\"), url(" + __webpack_require__(10) + "#CaviarDreams-Bold) format(\"svg\");\n  font-weight: 700;\n  font-style: normal;\n  font-stretch: normal;\n  unicode-range: U+0020-2265; }\n\n@font-face {\n  font-family: 'CaviarDreams-Regular';\n  src: url(" + __webpack_require__(11) + ");\n  src: url(" + __webpack_require__(11) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(12) + ") format(\"woff\"), url(" + __webpack_require__(13) + ") format(\"truetype\"), url(" + __webpack_require__(14) + "#CaviarDreams-Regular) format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n  font-stretch: normal;\n  unicode-range: U+0020-2265; }\n\n@keyframes bounce {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-10px); }\n  40% {\n    transform: translateY(-5px); }\n  50% {\n    transform: translateY(-10px); }\n  60% {\n    transform: translateY(-5px); }\n  80% {\n    transform: translateY(-10px); }\n  100% {\n    transform: translateY(-10px); } }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'CaviarDreams-Regular';\n  width: 100%;\n  height: 100%; }\n\n.vertical {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%); }\n\n#app {\n  /*/ intro /*/\n  /*/ INTRO BOXES /*/\n  /*/ NAV /*/ }\n  #app .page {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  #app .content-container {\n    width: 80%;\n    height: 85%;\n    position: relative;\n    margin: 3% auto; }\n  #app .content {\n    position: relative; }\n  #app .padded-content {\n    padding: 5%; }\n  #app .footer {\n    position: absolute;\n    bottom: 0;\n    height: 0%;\n    width: 100%; }\n  #app .intro-container {\n    width: 510px;\n    height: 345px;\n    margin: 0 auto; }\n  #app .intro-grid {\n    width: 100%;\n    height: 100%; }\n  #app .intro-text {\n    width: 534px;\n    padding: 10px;\n    height: 100px;\n    opacity: 0; }\n  #app .last-name {\n    font-size: 29px;\n    letter-spacing: 44px;\n    text-align: justify;\n    text-transform: uppercase;\n    color: #191919; }\n  #app .start {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: #7f2a57;\n    font-size: 15px;\n    color: white;\n    margin: 0 auto;\n    text-align: center;\n    line-height: 50px;\n    position: relative;\n    bottom: 0;\n    top: 25px;\n    cursor: pointer; }\n  #app .cards-ul {\n    padding: 0;\n    margin: 0 auto; }\n  #app .cards-ul li {\n    list-style-type: none;\n    float: left;\n    margin: 10px; }\n  #app .flip-container {\n    perspective: 1000;\n    list-style-type: none; }\n  #app .flipper {\n    transform: rotateY(0deg);\n    transform-style: preserve-3d;\n    position: relative; }\n  #app .flip-container, #app .flipper, #app .front, #app .back {\n    width: 150px;\n    height: 150px; }\n  #app .front, #app .back {\n    backface-visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  #app .front {\n    z-index: 2;\n    transform: rotateY(0deg); }\n  #app .back {\n    transform: rotateY(180deg); }\n  #app .logo {\n    float: right;\n    font-size: 40px;\n    color: #191919; }\n  #app .nav {\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 10%; }\n  #app .nav-ul {\n    padding: 0;\n    height: 100%; }\n  #app .nav-div {\n    height: 35px;\n    width: 100px;\n    float: left;\n    display: inline; }\n  #app .nav-vertical {\n    width: 2px;\n    margin: 0 auto; }\n  #app .nav-li {\n    list-style-type: none;\n    font-size: 15px;\n    text-align: center;\n    margin: 2.5% 2%;\n    text-transform: uppercase; }\n    #app .nav-li.about:hover {\n      background: #FF6160;\n      color: white; }\n    #app .nav-li.portfolio:hover {\n      background: #C4C65D;\n      color: white; }\n    #app .nav-li.work:hover {\n      background: #7f2a57;\n      color: white; }\n    #app .nav-li.contact:hover {\n      background: #71c5c9;\n      color: white; }\n\n#app.on .flipper.init-intro {\n  transform: rotateY(180deg);\n  transition: transform 1s;\n  -webkit-transition: transform 1s; }\n\n#app.on .flipper.init-intro:hover {\n  transform: rotateY(0deg); }\n\n#app.on .intro-text.init-intro {\n  opacity: 1;\n  transition: opacity 1s 1.5s; }\n\n#app.on .start.init-intro {\n  opacity: 1;\n  animation: bounce 2s 2s infinite; }\n\n#app.on .content {\n  height: 0;\n  width: 100%;\n  transition: all .25s linear;\n  border: 2px solid transparent;\n  background: transparent;\n  z-index: 10; }\n  #app.on .content.about {\n    height: 85%;\n    width: 100%;\n    border: 2px solid #FF6160;\n    background: #fff;\n    transition: all .25s .35s linear; }\n  #app.on .content.portfolio {\n    height: 85%;\n    width: 100%;\n    border: 2px solid #C4C65D;\n    background: #fff;\n    transition: all .25s .35s linear; }\n  #app.on .content.work {\n    height: 85%;\n    width: 100%;\n    border: 2px solid #7f2a57;\n    background: #fff;\n    transition: all .25s .35s linear; }\n  #app.on .content.contact {\n    height: 85%;\n    width: 100%;\n    border: 2px solid #71c5c9;\n    background: #fff;\n    transition: all .25s .35s linear; }\n\n#app.on .footer {\n  height: 0;\n  width: 100%; }\n  #app.on .footer.about {\n    background: #FF6160;\n    height: 50%;\n    transition: all .25s .5s linear; }\n  #app.on .footer.portfolio {\n    background: #C4C65D;\n    height: 50%;\n    transition: all .25s .5s linear; }\n  #app.on .footer.work {\n    background: #7f2a57;\n    height: 50%;\n    transition: all .25s .5s linear; }\n  #app.on .footer.contact {\n    background: #71c5c9;\n    height: 50%;\n    transition: all .25s .5s linear; }\n\n#app.on .nav-vertical {\n  height: 0;\n  transition: all .25s .35s linear; }\n  #app.on .nav-vertical.about {\n    height: 38px;\n    background: #FF6160;\n    transition: all .25s linear; }\n  #app.on .nav-vertical.portfolio {\n    height: 38px;\n    background: #C4C65D;\n    transition: all .25s linear; }\n  #app.on .nav-vertical.work {\n    height: 38px;\n    background: #7f2a57;\n    transition: all .25s linear; }\n  #app.on .nav-vertical.contact {\n    height: 38px;\n    background: #71c5c9;\n    transition: all .25s linear; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./src/assets.ttf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./src/assets.svg";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./src/assets.ttf";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./src/assets.svg";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);