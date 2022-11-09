"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var browser = browser || chrome;
window.tabsActive = [];
window.displayInfo = [];
function createWindowWithTabs(_x, _x2) {
  return _createWindowWithTabs.apply(this, arguments);
}
function _createWindowWithTabs() {
  _createWindowWithTabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tabs, isIncognito) {
    var pinnedIndex, firstTab, t, i, firstPinned, w, _iterator2, _step2, oldTabId, oldTab, tabPinned, movedTabs, newTab;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pinnedIndex = 0;
            firstTab = tabs.shift();
            t = [];
            for (i = 0; i < tabs.length; i++) {
              t.push(tabs[i].id);
            }
            ;
            firstPinned = firstTab.pinned;
            _context2.next = 8;
            return browser.windows.create({
              tabId: firstTab.id,
              incognito: !!isIncognito
            });
          case 8:
            w = _context2.sent;
            if (!firstPinned) {
              _context2.next = 13;
              break;
            }
            _context2.next = 12;
            return browser.tabs.update(w.tabs[0].id, {
              pinned: firstPinned
            });
          case 12:
            pinnedIndex++;
          case 13:
            if (!(t.length > 0)) {
              _context2.next = 51;
              break;
            }
            i = 0;
            _iterator2 = _createForOfIteratorHelper(t);
            _context2.prev = 16;
            _iterator2.s();
          case 18:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 42;
              break;
            }
            oldTabId = _step2.value;
            i++;
            _context2.next = 23;
            return browser.tabs.get(oldTabId);
          case 23:
            oldTab = _context2.sent;
            tabPinned = oldTab.pinned;
            movedTabs = [];
            if (tabPinned) {
              _context2.next = 32;
              break;
            }
            _context2.next = 29;
            return browser.tabs.move(oldTabId, {
              windowId: w.id,
              index: -1
            });
          case 29:
            movedTabs = _context2.sent;
            _context2.next = 35;
            break;
          case 32:
            _context2.next = 34;
            return browser.tabs.move(oldTabId, {
              windowId: w.id,
              index: pinnedIndex++
            });
          case 34:
            movedTabs = _context2.sent;
          case 35:
            if (!(movedTabs.length > 0)) {
              _context2.next = 40;
              break;
            }
            newTab = movedTabs[0];
            if (!tabPinned) {
              _context2.next = 40;
              break;
            }
            _context2.next = 40;
            return browser.tabs.update(newTab.id, {
              pinned: tabPinned
            });
          case 40:
            _context2.next = 18;
            break;
          case 42:
            _context2.next = 47;
            break;
          case 44:
            _context2.prev = 44;
            _context2.t0 = _context2["catch"](16);
            _iterator2.e(_context2.t0);
          case 47:
            _context2.prev = 47;
            _iterator2.f();
            return _context2.finish(47);
          case 50:
            ;
          case 51:
            _context2.next = 53;
            return browser.windows.update(w.id, {
              focused: true
            });
          case 53:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[16, 44, 47, 50]]);
  }));
  return _createWindowWithTabs.apply(this, arguments);
}
function focusOnTabAndWindowDelayed(tab) {
  var tab = JSON.parse(JSON.stringify(tab));
  setTimeout(focusOnTabAndWindow.bind(this, tab), 125);
}
function focusOnTabAndWindow(_x3) {
  return _focusOnTabAndWindow.apply(this, arguments);
}
function _focusOnTabAndWindow() {
  _focusOnTabAndWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tab) {
    var windowId, tabId;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            windowId = tab.windowId;
            if (!!tab.tabId) {
              tabId = tab.tabId;
            } else {
              tabId = tab.id;
            }
            browser.windows.update(windowId, {
              focused: true
            }).then(function (tabId, windowId) {
              browser.tabs.update(tabId, {
                active: true
              }).then(function (tabId, windowId) {
                tabActiveChanged({
                  tabId: tabId,
                  windowId: windowId
                });
              }.bind(this, tabId, windowId));
            }.bind(this, tabId, windowId));
          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _focusOnTabAndWindow.apply(this, arguments);
}
function focusOnWindowDelayed(windowId) {
  setTimeout(focusOnWindow.bind(this, windowId), 125);
}
function focusOnWindow(windowId) {
  browser.windows.update(windowId, {
    focused: true
  });
}
function updateTabCount() {
  return _updateTabCount.apply(this, arguments);
}
function _updateTabCount() {
  _updateTabCount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var run, result, count, toRemove, i, t, found, j;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            run = true;
            if (localStorageAvailable()) {
              if (typeof localStorage["badge"] === "undefined") localStorage["badge"] = "1";
              if (localStorage["badge"] == "0") run = false;
            }
            if (!run) {
              _context4.next = 18;
              break;
            }
            _context4.next = 5;
            return browser.tabs.query({});
          case 5:
            result = _context4.sent;
            count = 0;
            if (!!result && !!result.length) {
              count = result.length;
            }
            _context4.next = 10;
            return browser.browserAction.setBadgeText({
              text: count + ""
            });
          case 10:
            _context4.next = 12;
            return browser.browserAction.setBadgeBackgroundColor({
              color: "purple"
            });
          case 12:
            toRemove = [];
            if (!!window.tabsActive) {
              for (i = 0; i < window.tabsActive.length; i++) {
                t = window.tabsActive[i];
                found = false;
                if (!!result && !!result.length) {
                  for (j = 0; j < result.length; j++) {
                    if (result[j].id == t.tabId) found = true;
                  }
                  ;
                }
                if (!found) toRemove.push(i);
              }
              ;
            }
            // console.log("to remove", toRemove);
            for (i = toRemove.length - 1; i >= 0; i--) {
              // console.log("removing", toRemove[i]);
              if (!!window.tabsActive && window.tabsActive.length > 0) {
                if (!!window.tabsActive[toRemove[i]]) window.tabsActive.splice(toRemove[i], 1);
              }
            }
            ;
            _context4.next = 20;
            break;
          case 18:
            _context4.next = 20;
            return browser.browserAction.setBadgeText({
              text: ""
            });
          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateTabCount.apply(this, arguments);
}
var updateTabCountDebounce = debounce(updateTabCount, 250);
function tabRemoved() {
  updateTabCountDebounce();
}
function tabAdded(_x4) {
  return _tabAdded.apply(this, arguments);
}
function _tabAdded() {
  _tabAdded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tab) {
    var tabLimit, tabCount;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (typeof localStorage["tabLimit"] === "undefined") localStorage["tabLimit"] = "0";
            try {
              tabLimit = JSON.parse(localStorage["tabLimit"]);
            } catch (e) {
              tabLimit = 0;
            }
            if (!(tabLimit > 0)) {
              _context5.next = 10;
              break;
            }
            if (!(tab.id != browser.tabs.TAB_ID_NONE)) {
              _context5.next = 10;
              break;
            }
            _context5.next = 6;
            return browser.tabs.query({
              currentWindow: true
            });
          case 6:
            tabCount = _context5.sent;
            if (!(tabCount.length > tabLimit)) {
              _context5.next = 10;
              break;
            }
            _context5.next = 10;
            return createWindowWithTabs([tab], tab.incognito);
          case 10:
            updateTabCountDebounce();
          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _tabAdded.apply(this, arguments);
}
function tabActiveChanged(tab) {
  if (!!tab && !!tab.tabId) {
    if (!window.tabsActive) window.tabsActive = [];
    if (!!window.tabsActive && window.tabsActive.length > 0) {
      var lastActive = window.tabsActive[window.tabsActive.length - 1];
      if (!!lastActive && lastActive.tabId == tab.tabId && lastActive.windowId == tab.windowId) {
        return;
      }
    }
    while (window.tabsActive.length > 20) {
      window.tabsActive.shift();
    }
    for (var i = window.tabsActive.length - 1; i >= 0; i--) {
      if (window.tabsActive[i].tabId == tab.tabId) {
        window.tabsActive.splice(i, 1);
      }
    }
    ;
    window.tabsActive.push(tab);
  }
  updateTabCountDebounce();
}
function openSidebar() {
  return _openSidebar.apply(this, arguments);
}
function _openSidebar() {
  _openSidebar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return browser.sidebarAction.open();
          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _openSidebar.apply(this, arguments);
}
function openPopup() {
  return _openPopup.apply(this, arguments);
}
function _openPopup() {
  _openPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var openInOwnTab;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (typeof localStorage["openInOwnTab"] === "undefined") localStorage["openInOwnTab"] = "0";
            openInOwnTab = false;
            try {
              openInOwnTab = !!JSON.parse(localStorage["openInOwnTab"]);
            } catch (e) {
              openInOwnTab = false;
            }
            if (!openInOwnTab) {
              _context7.next = 12;
              break;
            }
            _context7.next = 6;
            return browser.browserAction.setPopup({
              popup: "popup.html?popup=true"
            });
          case 6:
            _context7.next = 8;
            return browser.browserAction.openPopup();
          case 8:
            _context7.next = 10;
            return browser.browserAction.setPopup({
              popup: ""
            });
          case 10:
            _context7.next = 14;
            break;
          case 12:
            _context7.next = 14;
            return browser.browserAction.openPopup();
          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _openPopup.apply(this, arguments);
}
function openAsOwnTab() {
  return _openAsOwnTab.apply(this, arguments);
}
function _openAsOwnTab() {
  _openAsOwnTab = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var popup_page, tabs, currentTab, previousTab, i, tab;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            popup_page = browser.runtime.getURL("popup.html");
            _context8.next = 3;
            return browser.tabs.query({});
          case 3:
            tabs = _context8.sent;
            if (!!window.tabsActive && window.tabsActive.length > 1) {
              currentTab = window.tabsActive[window.tabsActive.length - 1];
              previousTab = window.tabsActive[window.tabsActive.length - 2];
            }
            i = 0;
          case 6:
            if (!(i < tabs.length)) {
              _context8.next = 17;
              break;
            }
            tab = tabs[i];
            if (!(tab.url.indexOf("popup.html") > -1 && tab.url.indexOf(popup_page) > -1)) {
              _context8.next = 14;
              break;
            }
            if (!(currentTab && currentTab.tabId && tab.id == currentTab.tabId && previousTab && previousTab.tabId)) {
              _context8.next = 13;
              break;
            }
            return _context8.abrupt("return", focusOnTabAndWindow(previousTab));
          case 13:
            return _context8.abrupt("return", browser.windows.update(tab.windowId, {
              focused: true
            }).then(function () {
              browser.tabs.highlight({
                windowId: tab.windowId,
                tabs: tab.index
              });
            }.bind(this)));
          case 14:
            i++;
            _context8.next = 6;
            break;
          case 17:
            return _context8.abrupt("return", browser.tabs.create({
              url: "popup.html"
            }));
          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _openAsOwnTab.apply(this, arguments);
}
function setupPopup() {
  return _setupPopup.apply(this, arguments);
}
function _setupPopup() {
  _setupPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var openInOwnTab;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (typeof localStorage["openInOwnTab"] === "undefined") localStorage["openInOwnTab"] = "0";
            openInOwnTab = false;
            try {
              openInOwnTab = !!JSON.parse(localStorage["openInOwnTab"]);
            } catch (e) {
              openInOwnTab = false;
            }
            console.log(openInOwnTab);
            _context9.next = 6;
            return browser.browserAction.onClicked.removeListener(openAsOwnTab);
          case 6:
            if (!openInOwnTab) {
              _context9.next = 13;
              break;
            }
            _context9.next = 9;
            return browser.browserAction.setPopup({
              popup: ""
            });
          case 9:
            _context9.next = 11;
            return browser.browserAction.onClicked.addListener(openAsOwnTab);
          case 11:
            _context9.next = 15;
            break;
          case 13:
            _context9.next = 15;
            return browser.browserAction.setPopup({
              popup: "popup.html?popup=true"
            });
          case 15:
            if (browser.sidebarAction) {
              browser.sidebarAction.setPanel({
                panel: "popup.html?panel=true"
              });
            }
          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _setupPopup.apply(this, arguments);
}
function setupListeners() {
  return _setupListeners.apply(this, arguments);
} // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function _setupListeners() {
  _setupListeners = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return browser.contextMenus.removeAll();
          case 2:
            browser.contextMenus.create({
              title: "📔 Open in own tab",
              contexts: ["browser_action"],
              onclick: openAsOwnTab
            });
            if (!!browser.browserAction.openPopup) {
              browser.contextMenus.create({
                title: "📑 Open popup",
                contexts: ["browser_action"],
                onclick: openPopup
              });
            }
            if (!!browser.sidebarAction) {
              browser.contextMenus.create({
                title: "🗂 Open sidebar",
                contexts: ["browser_action"],
                onclick: openSidebar
              });
            }
            browser.contextMenus.create({
              type: "separator",
              contexts: ["browser_action"]
            });
            browser.contextMenus.create({
              title: "😍 Support this extension",
              id: "support_menu",
              "contexts": ["browser_action"]
            });
            browser.contextMenus.create({
              title: "⭐ Leave a review",
              "contexts": ["browser_action"],
              parentId: "support_menu",
              onclick: function onclick(info, tab) {
                if (navigator.userAgent.search("Firefox") > -1) {
                  browser.tabs.create({
                    url: 'https://addons.mozilla.org/en-US/firefox/addon/tab-manager-plus-for-firefox/'
                  });
                } else {
                  browser.tabs.create({
                    url: 'https://chrome.google.com/webstore/detail/tab-manager-plus-for-chro/cnkdjjdmfiffagllbiiilooaoofcoeff'
                  });
                }
              }
            });
            browser.contextMenus.create({
              title: "☕ Donate to keep Extensions Alive",
              "contexts": ["browser_action"],
              parentId: "support_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=67TZLSEGYQFFW'
                });
              }
            });
            browser.contextMenus.create({
              title: "💰 Become a Patron",
              "contexts": ["browser_action"],
              parentId: "support_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=67TZLSEGYQFFW'
                });
              }
            });
            browser.contextMenus.create({
              title: "🐦 Follow on Twitter",
              "contexts": ["browser_action"],
              parentId: "support_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'https://www.twitter.com/mastef'
                });
              }
            });
            browser.contextMenus.create({
              title: "🤔 Issues and Suggestions",
              id: "code_menu",
              "contexts": ["browser_action"]
            });
            browser.contextMenus.create({
              title: "🆕 View recent changes",
              "contexts": ["browser_action"],
              parentId: "code_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'changelog.html'
                });
              }
            });
            browser.contextMenus.create({
              title: "⚙ Edit Options",
              "contexts": ["browser_action"],
              parentId: "code_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'options.html'
                });
              }
            });
            browser.contextMenus.create({
              title: "💻 View source code",
              "contexts": ["browser_action"],
              parentId: "code_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'https://github.com/stefanXO/Tab-Manager-Plus'
                });
              }
            });
            browser.contextMenus.create({
              title: "🤔 Report an issue",
              "contexts": ["browser_action"],
              parentId: "code_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'https://github.com/stefanXO/Tab-Manager-Plus/issues'
                });
              }
            });
            browser.contextMenus.create({
              title: "💡 Send a suggestion",
              "contexts": ["browser_action"],
              parentId: "code_menu",
              onclick: function onclick(info, tab) {
                browser.tabs.create({
                  url: 'https://github.com/stefanXO/Tab-Manager-Plus/issues'
                });
                browser.tabs.create({
                  url: 'mailto:markus+tmp@stefanxo.com'
                });
              }
            });
            setupPopup();
            browser.tabs.onCreated.removeListener(tabAdded);
            browser.tabs.onUpdated.removeListener(tabRemoved);
            browser.tabs.onRemoved.removeListener(tabRemoved);
            browser.tabs.onReplaced.removeListener(tabRemoved);
            browser.tabs.onDetached.removeListener(tabRemoved);
            browser.tabs.onAttached.removeListener(tabRemoved);
            browser.tabs.onActivated.removeListener(tabActiveChanged);
            browser.tabs.onMoved.removeListener(tabRemoved);
            browser.windows.onFocusChanged.removeListener(windowFocus);
            browser.windows.onCreated.removeListener(windowCreated);
            browser.windows.onRemoved.removeListener(windowRemoved);
            browser.tabs.onCreated.addListener(tabAdded);
            browser.tabs.onUpdated.addListener(tabRemoved);
            browser.tabs.onRemoved.addListener(tabRemoved);
            browser.tabs.onReplaced.addListener(tabRemoved);
            browser.tabs.onDetached.addListener(tabRemoved);
            browser.tabs.onAttached.addListener(tabRemoved);
            browser.tabs.onActivated.addListener(tabActiveChanged);
            browser.tabs.onMoved.addListener(tabRemoved);
            browser.windows.onFocusChanged.addListener(windowFocus);
            browser.windows.onCreated.addListener(windowCreated);
            browser.windows.onRemoved.addListener(windowRemoved);
            updateTabCountDebounce();
            setTimeout(cleanUp, 5000);
          case 42:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _setupListeners.apply(this, arguments);
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
;
function localStorageAvailable() {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
function windowFocus(windowId) {
  try {
    if (!!windowId) {
      windowActive(windowId);
      // console.log("onFocused", windowId);
      hideWindows(windowId);
    }
  } catch (e) {}
}
function windowCreated(window) {
  try {
    if (!!window && !!window.id) {
      windowActive(window.id);
    }
  } catch (e) {}
  // console.log("onCreated", window.id);
}

function windowRemoved(windowId) {
  try {
    if (!!windowId) {
      windowActive(windowId);
    }
  } catch (e) {}
  // console.log("onRemoved", windowId);
}
function hideWindows(_x5) {
  return _hideWindows.apply(this, arguments);
}
function _hideWindows() {
  _hideWindows = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(windowId) {
    var result;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!(navigator.userAgent.search("Firefox") > -1)) {
              _context12.next = 2;
              break;
            }
            return _context12.abrupt("return");
          case 2:
            if (!(!windowId || windowId < 0)) {
              _context12.next = 6;
              break;
            }
            return _context12.abrupt("return");
          case 6:
            if (!localStorageAvailable()) {
              _context12.next = 12;
              break;
            }
            if (typeof localStorage["hideWindows"] === "undefined") localStorage["hideWindows"] = "0";
            if (!(localStorage["hideWindows"] == "0")) {
              _context12.next = 10;
              break;
            }
            return _context12.abrupt("return");
          case 10:
            _context12.next = 14;
            break;
          case 12:
            console.log("no local storage");
            return _context12.abrupt("return");
          case 14:
            _context12.next = 16;
            return browser.permissions.contains({
              permissions: ['system.display']
            });
          case 16:
            result = _context12.sent;
            if (result) {
              // The extension has the permissions.
              chrome.system.display.getInfo( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(windowId, displaylayouts) {
                  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, displaylayout, windows, monitor, i, a, result;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          window.displayInfo = [];
                          _iteratorNormalCompletion = true;
                          _didIteratorError = false;
                          _iteratorError = undefined;
                          _context11.prev = 4;
                          for (_iterator = displaylayouts[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            displaylayout = _step.value;
                            window.displayInfo.push(displaylayout.bounds);
                          }
                          _context11.next = 12;
                          break;
                        case 8:
                          _context11.prev = 8;
                          _context11.t0 = _context11["catch"](4);
                          _didIteratorError = true;
                          _iteratorError = _context11.t0;
                        case 12:
                          _context11.prev = 12;
                          _context11.prev = 13;
                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }
                        case 15:
                          _context11.prev = 15;
                          if (!_didIteratorError) {
                            _context11.next = 18;
                            break;
                          }
                          throw _iteratorError;
                        case 18:
                          return _context11.finish(15);
                        case 19:
                          return _context11.finish(12);
                        case 20:
                          _context11.next = 22;
                          return browser.windows.getAll({
                            populate: true
                          });
                        case 22:
                          windows = _context11.sent;
                          monitor = -1;
                          for (i = windows.length - 1; i >= 0; i--) {
                            if (windows[i].id == windowId) {
                              for (a in window.displayInfo) {
                                result = is_in_bounds(windows[i], window.displayInfo[a]);
                                if (result) {
                                  monitor = a;
                                }
                              }
                            }
                          }
                          ;
                          i = windows.length - 1;
                        case 27:
                          if (!(i >= 0)) {
                            _context11.next = 35;
                            break;
                          }
                          if (!(windows[i].id != windowId)) {
                            _context11.next = 32;
                            break;
                          }
                          if (!is_in_bounds(windows[i], window.displayInfo[monitor])) {
                            _context11.next = 32;
                            break;
                          }
                          _context11.next = 32;
                          return browser.windows.update(windows[i].id, {
                            "state": "minimized"
                          });
                        case 32:
                          i--;
                          _context11.next = 27;
                          break;
                        case 35:
                          ;
                        case 36:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, null, [[4, 8, 12, 20], [13,, 15, 19]]);
                }));
                return function (_x6, _x7) {
                  return _ref2.apply(this, arguments);
                };
              }().bind(null, windowId));
            }
          case 18:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _hideWindows.apply(this, arguments);
}
function is_in_bounds(object, bounds) {
  var C = object,
    B = bounds;
  if (C.left >= B.left && C.left <= B.left + B.width) {
    if (C.top >= B.top && C.top <= B.top + B.height) {
      return true;
    }
  }
  return false;
}
;
function windowActive(windowId) {
  if (windowId < 0) return;
  var windows = JSON.parse(localStorage["windowAge"]);
  if (windows instanceof Array) {} else {
    windows = [];
  }
  if (windows.indexOf(windowId) > -1) windows.splice(windows.indexOf(windowId), 1);
  windows.unshift(windowId);
  localStorage["windowAge"] = JSON.stringify(windows);

  // browser.windows.getLastFocused({ populate: true }, function (w) {
  // 	for (var i = 0; i < w.tabs.length; i++) {
  // 		var tab = w.tabs[i];
  // 		if (tab.active == true) {
  // 			// console.log("get last focused", tab.id);
  // 			// tabActiveChanged({
  // 			// 	tabId: tab.id,
  // 			// 	windowId: tab.windowId
  // 			// });
  // 		}
  // 	};
  // });
  // console.log(windows);
}

browser.commands.onCommand.addListener(function (command) {
  if (command == "switch_to_previous_active_tab") {
    if (!!window.tabsActive && window.tabsActive.length > 1) {
      focusOnTabAndWindow(window.tabsActive[window.tabsActive.length - 2]);
    }
  }
});
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == "reload_popup_controls") {
    setupPopup();
  }
});
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var windows, i;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return browser.windows.getAll({
            populate: true
          });
        case 2:
          windows = _context.sent;
          localStorage["windowAge"] = JSON.stringify([]);
          if (!!windows && windows.length > 0) {
            windows.sort(function (a, b) {
              if (a.id < b.id) return 1;
              if (a.id > b.id) return -1;
              return 0;
            });
            for (i = 0; i < windows.length; i++) {
              if (!!windows[i].id) windowActive(windows[i].id);
            }
            ;
          }
        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
function cleanUp() {
  return _cleanUp.apply(this, arguments);
}
function _cleanUp() {
  _cleanUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var activewindows, windowids, _iterator3, _step3, w, windows, i, names, _i, _Object$keys, id;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return browser.windows.getAll({
              populate: true
            });
          case 2:
            activewindows = _context13.sent;
            windowids = [];
            _iterator3 = _createForOfIteratorHelper(activewindows);
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                w = _step3.value;
                windowids.push(w.id);
              }
              // console.log("window ids...", windowids);
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            windows = JSON.parse(localStorage["windowAge"]);
            if (windows instanceof Array) {} else {
              windows = [];
            }
            // console.log("before", JSON.parse(JSON.stringify(windows)));
            for (i = windows.length - 1; i >= 0; i--) {
              if (windowids.indexOf(windows[i]) < 0) {
                // console.log("did not find", windows[i], i);
                windows.splice(i, 1);
              }
            }
            ;
            // console.log("after", JSON.parse(JSON.stringify(windows)));
            localStorage["windowAge"] = JSON.stringify(windows);
            names = localStorage["windowNames"];
            if (!!names) {
              names = JSON.parse(names);
            } else {
              names = {};
            }

            // console.log("before", JSON.parse(JSON.stringify(names)));
            for (_i = 0, _Object$keys = Object.keys(names); _i < _Object$keys.length; _i++) {
              id = _Object$keys[_i];
              if (windowids.indexOf(parseInt(id)) < 0) {
                // console.log("did not find", id);
                delete names[id];
              }
            }
            // console.log("after", JSON.parse(JSON.stringify(names)));
            localStorage["windowNames"] = JSON.stringify(names);
          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _cleanUp.apply(this, arguments);
}
setInterval(setupListeners, 300000);
setupListeners();