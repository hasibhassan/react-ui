'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".react-button-module_button__2oxCj {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  color: #fff;\n  background-color: rgba(19, 102, 160, 1);\n}\n\n.react-button-module_button__2oxCj:hover {\n  background-color: rgb(14, 73, 114);\n}\n\n.react-button-module_button__2oxCj:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 0px rgb(238, 227, 220), 0 0 0 4px rgba(25, 131, 205, 1),\n    0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n\n.react-button-module_buttonRed__39GRi {\n  background-color: rgb(160, 19, 19);\n}\n\n.react-button-module_buttonRed__39GRi:hover {\n  background-color: rgb(73, 9, 9);\n}\n\n.react-button-module_buttonRed__39GRi:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px rgb(238, 227, 220), 0 0 0 4px rgb(205, 25, 64),\n    0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n/* change padding, font-size, line-height */\n\n.react-button-module_smBtn__3xfyA {\n  padding: 0.5rem 0.75rem;\n  line-height: 1rem;\n}\n\n.react-button-module_lgBtn__2b4tJ {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.react-button-module_xlBtn__1VZSb {\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.react-button-module_roundedBtn__2OoSp {\n  border-radius: 9999px;\n}\n\n.react-button-module_smBtnIcon__fsyc7 {\n  margin-left: -0.125rem;\n  margin-right: 0.5rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.react-button-module_btnIcon__1XCQo {\n  margin-left: -0.25rem;\n  margin-right: 0.5rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.react-button-module_lgBtnIcon__1OiVx {\n  margin-left: -0.25rem;\n  margin-right: 0.75rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.react-button-module_rightSmBtnIcon__3YvsZ {\n  margin-left: 0.5rem;\n  margin-right: -0.125rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.react-button-module_rightBtnIcon__37RBz {\n  margin-left: 0.5rem;\n  margin-right: -0.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.react-button-module_rightLgBtnIcon__2y5oL {\n  margin-left: 0.75rem;\n  margin-right: -0.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n";
var styles = {"button":"react-button-module_button__2oxCj","buttonRed":"react-button-module_buttonRed__39GRi react-button-module_button__2oxCj","smBtn":"react-button-module_smBtn__3xfyA react-button-module_button__2oxCj","lgBtn":"react-button-module_lgBtn__2b4tJ react-button-module_button__2oxCj","xlBtn":"react-button-module_xlBtn__1VZSb react-button-module_button__2oxCj","roundedBtn":"react-button-module_roundedBtn__2OoSp react-button-module_button__2oxCj","smBtnIcon":"react-button-module_smBtnIcon__fsyc7","btnIcon":"react-button-module_btnIcon__1XCQo","lgBtnIcon":"react-button-module_lgBtnIcon__1OiVx","rightSmBtnIcon":"react-button-module_rightSmBtnIcon__3YvsZ","rightBtnIcon":"react-button-module_rightBtnIcon__37RBz","rightLgBtnIcon":"react-button-module_rightLgBtnIcon__2y5oL"};
styleInject(css_248z);

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (_typeof(mix) === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function clsx () {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}

function Button(_ref) {
  var _clsx;

  var label = _ref.label,
      size = _ref.size,
      isRounded = _ref.isRounded,
      color = _ref.color,
      onClick = _ref.onClick;
  var classes = clsx(styles.button, (_clsx = {}, _defineProperty(_clsx, styles.smBtn, size === 'small'), _defineProperty(_clsx, styles.lgBtn, size === 'large'), _defineProperty(_clsx, styles.xlBtn, size === 'xl'), _defineProperty(_clsx, styles.roundedBtn, isRounded === true), _defineProperty(_clsx, styles.buttonRed, color === 'red'), _clsx));
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: classes,
    onClick: onClick
  }, label);
}

module.exports = Button;
