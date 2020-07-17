module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/UserDropdown.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UserDropdown.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2__);



/**
 * The `UserDropdown` component shows a dropdown of session controls.
 */

var UserDropdown = /*#__PURE__*/function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserDropdown, _Dropdown);

  function UserDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  UserDropdown.initProps = function initProps(props) {
    _Dropdown.initProps.call(this, props);

    props.icon = 'fas fa-ellipsis-v';
    props.className = 'IndexPage-stats-dropdown';
    props.buttonClassName = 'Button Button--icon Button--flat';
  };

  var _proto = UserDropdown.prototype;

  _proto.view = function view() {
    this.props.children = flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.items().toArray();
    return _Dropdown.prototype.view.call(this);
  };

  return UserDropdown;
}(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/formatNumber */ "flarum/utils/formatNumber");
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UserDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/UserDropdown */ "./src/forum/components/UserDropdown.js");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/AvatarEditor */ "flarum/components/AvatarEditor");
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_11__);












var localePrefix = 'the-turk-welcome-widgets.forum.';
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('the-turk-welcome-widgets', function () {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_7___default.a.prototype.ww_lastLoginDiscussionsCount = flarum_Model__WEBPACK_IMPORTED_MODULE_8___default.a.attribute('ww_lastLoginDiscussionsCount');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_7___default.a.prototype.ww_lastLoginPostsCount = flarum_Model__WEBPACK_IMPORTED_MODULE_8___default.a.attribute('ww_lastLoginPostsCount');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_7___default.a.prototype.ww_lastLoginUsersCount = flarum_Model__WEBPACK_IMPORTED_MODULE_8___default.a.attribute('ww_lastLoginUsersCount');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_7___default.a.prototype.ww_previousLoginAt = flarum_Model__WEBPACK_IMPORTED_MODULE_8___default.a.attribute('ww_previousLoginAt');

  var getGreetingTime = function getGreetingTime(currentTime, user) {
    var localeKey = 'welcome';
    var username_obj = {
      username: m("a", {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(user)
      }, user.username())
    };

    if (!(!currentTime || !currentTime.isValid())) {
      var splitAfternoon = 12;
      var splitEvening = 17;
      var currentHour = parseFloat(currentTime.format('HH'));

      if (currentHour >= splitAfternoon && currentHour < splitEvening) {
        localeKey = 'goodAfternoon';
      } else if (currentHour >= splitEvening) {
        localeKey = 'goodEvening';
      }

      localeKey = 'goodMorning';
    }

    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + localeKey, username_obj);
  };

  var getChangeInfo = function getChangeInfo(currentCount, previousCount) {
    var keyword, icon, percentage;

    if (previousCount == 0) {
      percentage = 0;
    } else {
      percentage = (currentCount - previousCount) / previousCount * 100;
    }

    if (percentage > 0) {
      keyword = 'up';
      icon = 'fas fa-chevron-up';
    } else if (percentage < 0) {
      percentage = percentage * -1;
      keyword = 'down';
      icon = 'fas fa-chevron-down';
    } else {
      keyword = 'neutral';
      icon = 'fas fa-minus';
    }

    percentage = percentage.toFixed(1) + '%';
    icon = flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(icon + ' stats-' + keyword);
    var badgeClass = 'stats-badge stats-' + keyword + ' stats-badge--' + keyword;
    return {
      percentage: percentage,
      icon: icon,
      badgeClass: badgeClass
    };
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (vdom) {
    var user = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    if (!user || !user.ww_previousLoginAt()) return;
    var currentCount, changeInfo, icon;
    var currentStats = {
      discussions: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ww_discussionsCount'),
      posts: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ww_postsCount'),
      users: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ww_usersCount')
    };
    var previousStats = {
      discussions: user.ww_lastLoginDiscussionsCount(),
      posts: user.ww_lastLoginPostsCount(),
      users: user.ww_lastLoginUsersCount()
    };
    var container = vdom.children.find(function (e) {
      return e.attrs && e.attrs.className && e.attrs.className.includes('container');
    });
    container.children.unshift(m("div", {
      className: "IndexPage-stats"
    }, m("div", {
      className: "IndexPage-stats-general"
    }, m("div", {
      className: "IndexPage-stats-header"
    }, m("h4", {
      className: "stats-greeting"
    }, getGreetingTime(moment(), user)), _components_UserDropdown__WEBPACK_IMPORTED_MODULE_6__["default"].component()), m("div", {
      className: "IndexPage-stats-body"
    }, m("div", {
      className: "Avatar-container"
    }, flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_11___default.a.component({
      user: user
    }), m("ul", {
      className: "badges"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(user.badges().toArray()))), m("div", {
      className: "IndexPage-stats-personal"
    }, m("div", null, m("h3", null, flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default()(user.commentCount())), m("p", null, m("a", {
      href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.posts', {
        username: user.username()
      })
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'posts')))), m("div", null, m("h3", null, flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default()(user.discussionCount())), m("p", null, m("a", {
      href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.discussions', {
        username: user.username()
      })
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'discussions'))))))), ['discussions', 'posts', 'users'].map(function (type) {
      switch (type) {
        case 'discussions':
          currentCount = currentStats.discussions;
          changeInfo = getChangeInfo(currentCount, previousStats.discussions);
          icon = 'fas fa-bars';
          break;

        case 'posts':
          currentCount = currentStats.posts;
          changeInfo = getChangeInfo(currentCount, previousStats.posts);
          icon = 'far fa-comment';
          break;

        case 'users':
          currentCount = currentStats.users;
          changeInfo = getChangeInfo(currentCount, previousStats.users);
          icon = 'far fa-user';
          break;
      }

      return m("div", {
        className: 'IndexPage-stats-' + type
      }, m("div", {
        className: "IndexPage-stats-header"
      }, m("div", {
        className: "IndexPage-stats-icon"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(icon)), m("h4", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + type))), m("div", {
        className: "IndexPage-stats-body"
      }, m("div", null, m("h3", null, [flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default()(currentCount), changeInfo.icon]), m("div", null, m("span", {
        className: changeInfo.badgeClass
      }, changeInfo.percentage), m("p", {
        className: "stats-since"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'sinceLastVisit', {
        span: m("span", {
          title: flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_10___default()(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9___default()(user.ww_previousLoginAt().date)),
          className: "stats-since--text"
        })
      }))))));
    })));
  });
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AvatarEditor":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/AvatarEditor']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AvatarEditor'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ }),

/***/ "flarum/utils/formatNumber":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/formatNumber']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/formatNumber'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map