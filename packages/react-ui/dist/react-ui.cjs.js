'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
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

function styleInject$2(css, ref) {
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

var css_248z$2 = ".react-button-module_button__2oxCj {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  color: #fff;\n  background-color: rgba(19, 102, 160, 1);\n}\n\n.react-button-module_button__2oxCj:hover {\n  background-color: rgb(14, 73, 114);\n}\n\n.react-button-module_button__2oxCj:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 0px rgb(238, 227, 220), 0 0 0 4px rgba(25, 131, 205, 1),\n    0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n\n.react-button-module_buttonRed__39GRi {\n  background-color: rgb(160, 19, 19);\n}\n\n.react-button-module_buttonRed__39GRi:hover {\n  background-color: rgb(73, 9, 9);\n}\n\n.react-button-module_buttonRed__39GRi:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px rgb(238, 227, 220), 0 0 0 4px rgb(205, 25, 64),\n    0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n/* change padding, font-size, line-height */\n\n.react-button-module_smBtn__3xfyA {\n  padding: 0.5rem 0.75rem;\n  line-height: 1rem;\n}\n\n.react-button-module_lgBtn__2b4tJ {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.react-button-module_xlBtn__1VZSb {\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.react-button-module_roundedBtn__2OoSp {\n  border-radius: 9999px;\n}\n\n.react-button-module_smBtnIcon__fsyc7 {\n  margin-left: -0.125rem;\n  margin-right: 0.5rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.react-button-module_btnIcon__1XCQo {\n  margin-left: -0.25rem;\n  margin-right: 0.5rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.react-button-module_lgBtnIcon__1OiVx {\n  margin-left: -0.25rem;\n  margin-right: 0.75rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.react-button-module_rightSmBtnIcon__3YvsZ {\n  margin-left: 0.5rem;\n  margin-right: -0.125rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.react-button-module_rightBtnIcon__37RBz {\n  margin-left: 0.5rem;\n  margin-right: -0.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.react-button-module_rightLgBtnIcon__2y5oL {\n  margin-left: 0.75rem;\n  margin-right: -0.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n";
var styles$2 = {
  "button": "react-button-module_button__2oxCj",
  "buttonRed": "react-button-module_buttonRed__39GRi react-button-module_button__2oxCj",
  "smBtn": "react-button-module_smBtn__3xfyA react-button-module_button__2oxCj",
  "lgBtn": "react-button-module_lgBtn__2b4tJ react-button-module_button__2oxCj",
  "xlBtn": "react-button-module_xlBtn__1VZSb react-button-module_button__2oxCj",
  "roundedBtn": "react-button-module_roundedBtn__2OoSp react-button-module_button__2oxCj",
  "smBtnIcon": "react-button-module_smBtnIcon__fsyc7",
  "btnIcon": "react-button-module_btnIcon__1XCQo",
  "lgBtnIcon": "react-button-module_lgBtnIcon__1OiVx",
  "rightSmBtnIcon": "react-button-module_rightSmBtnIcon__3YvsZ",
  "rightBtnIcon": "react-button-module_rightBtnIcon__37RBz",
  "rightLgBtnIcon": "react-button-module_rightLgBtnIcon__2y5oL"
};
styleInject$2(css_248z$2);

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

function clsx() {
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
  var classes = clsx(styles$2.button, (_clsx = {}, _defineProperty(_clsx, styles$2.smBtn, size === 'small'), _defineProperty(_clsx, styles$2.lgBtn, size === 'large'), _defineProperty(_clsx, styles$2.xlBtn, size === 'xl'), _defineProperty(_clsx, styles$2.roundedBtn, isRounded === true), _defineProperty(_clsx, styles$2.buttonRed, color === 'red'), _clsx));
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: classes,
    onClick: onClick
  }, label);
}

function styleInject$1(css, ref) {
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

var css_248z$1 = ".react-footer-module_footerContainer__1zPdh {\n  margin-left: auto;\n  margin-right: auto;\n  /* max-width: 80rem; */\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background-color: rgb(238, 227, 220);\n}\n\n.react-footer-module_stack__1M8SD {\n  display: flex;\n  flex-direction: column;\n}\n\n.react-footer-module_stackTwo__3EgwS {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.react-footer-module_logo__2fAhv {\n  height: 1.5rem;\n}\n\n.react-footer-module_copyright__2Tz_K {\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n}\n\n@media (min-width: 640px) {\n  .react-footer-module_footerContainer__1zPdh {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n";
var styles$1 = {
  "footerContainer": "react-footer-module_footerContainer__1zPdh",
  "stack": "react-footer-module_stack__1M8SD",
  "stackTwo": "react-footer-module_stackTwo__3EgwS",
  "logo": "react-footer-module_logo__2fAhv",
  "copyright": "react-footer-module_copyright__2Tz_K"
};
styleInject$1(css_248z$1);
var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && /*#__PURE__*/React__default["default"].createContext(DefaultContext);

var __assign = function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return /*#__PURE__*/React__default["default"].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return /*#__PURE__*/React__default["default"].createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}

function IconBase(props) {
  var elem = function elem(conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return /*#__PURE__*/React__default["default"].createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React__default["default"].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? /*#__PURE__*/React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
} // THIS FILE IS AUTO GENERATED


function FaGithub(props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 496 512"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      }
    }]
  })(props);
}

function Footer() {
  return /*#__PURE__*/React__default["default"].createElement("footer", {
    className: styles$1.footerContainer
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.stack
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.stackTwo
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: "logo.svg",
    alt: "",
    className: styles$1.logo
  }), /*#__PURE__*/React__default["default"].createElement(FaGithub, {
    fontSize: "20px"
  })), /*#__PURE__*/React__default["default"].createElement("p", {
    className: styles$1.copyright
  }, "\xA9 ", new Date().getFullYear(), " Hasib Hassan. All rights reserved.")));
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

var css_248z = ".react-signin-module_container__1gZLB {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(238, 227, 220, 1);\n  padding: 3rem 1rem;\n}\n\n.react-signin-module_formContainer__6OVEs {\n  max-width: 28rem;\n  width: 100%;\n}\n\n.react-signin-module_formContainer__6OVEs > * + * {\n  margin-top: 2rem;\n}\n\n.react-signin-module_logo__23FsF {\n  margin-left: auto;\n  margin-right: auto;\n  height: 3rem;\n  width: auto;\n}\n\n.react-signin-module_heading__3FLwR {\n  margin-top: 1.5rem;\n  text-align: center;\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 800;\n  color: rgb(19, 23, 33);\n}\n\n.react-signin-module_signUpLinkText__1WExh {\n  margin-top: 0.5rem;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: rgb(74, 92, 130);\n}\n\n.react-signin-module_signUpLinkText__1WExh:hover {\n  color: rgb(93, 115, 163);\n}\n\n.react-signin-module_signUpLink__kg63b {\n  font-weight: 500;\n  color: rgba(79, 70, 229, 1);\n}\n\n.react-signin-module_signUpLink__kg63b:hover {\n  color: rgba(99, 102, 241, 1);\n}\n\n.react-signin-module_form__npZjX {\n  margin-top: 2rem;\n}\n\n.react-signin-module_form__npZjX > * + * {\n  margin-top: 1.5rem;\n}\n\n.react-signin-module_srOnly__1h3J4 {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.react-signin-module_inputGroup__2AV7v {\n  border-radius: 0.375rem;\n  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n\n.react-signin-module_inputGroup__2AV7v > * + * {\n  margin-top: -1px;\n}\n\n.react-signin-module_email__1bfwI {\n  appearance: none;\n  border-radius: 0px;\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-width: 1px;\n  border-color: rgba(125, 143, 181, 1);\n  color: rgba(19, 23, 33, 1);\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\n\n.react-signin-module_email__1bfwI::placeholder {\n  color: rgba(74, 92, 130, 1);\n}\n\n.react-signin-module_email__1bfwI:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  border-color: rgba(25, 131, 205, 1);\n  z-index: 10;\n}\n\n.react-signin-module_password__35vf- {\n  appearance: none;\n  border-radius: 0px;\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-width: 1px;\n  border-color: rgba(125, 143, 181, 1);\n  color: rgba(17, 24, 39, 1);\n  border-bottom-right-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem;\n}\n\n.react-signin-module_password__35vf-::placeholder {\n  color: rgba(74, 92, 130, 1);\n}\n\n.react-signin-module_password__35vf-:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  border-color: rgba(25, 131, 205, 1);\n  z-index: 10;\n}\n\n.react-signin-module_aboveSubmitContainer__sHGSk {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.react-signin-module_rememberMeContainer__1gBmN {\n  display: flex;\n  align-items: center;\n}\n\n.react-signin-module_rememberMe__2Acnp {\n  height: 1rem;\n  width: 1rem;\n  color: rgb(19, 102, 160);\n  border-color: rgb(125, 143, 181);\n  border-radius: 0.25rem;\n}\n\n.react-signin-module_rememberMeLabel__3fTfj {\n  margin-left: 0.5rem;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: rgb(19, 23, 33);\n}\n\n.react-signin-module_forgotPasswordContainer__220Xg {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.react-signin-module_forgotPasswordLink__2GROD {\n  font-weight: 500;\n  color: rgb(19, 102, 160);\n}\n\n.react-signin-module_forgotPasswordLink__2GROD:hover {\n  color: rgba(25, 131, 205, 1);\n}\n\n.react-signin-module_submitButton__15d37 {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  color: rgba(255, 255, 255, 1);\n  background-color: rgb(19, 102, 160);\n}\n\n.react-signin-module_submitButton__15d37:hover {\n  background-color: rgb(16, 88, 139);\n}\n\n.react-signin-module_submitButton__15d37:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n@media (min-width: 640px) {\n  .react-signin-module_container__1gZLB {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .react-signin-module_email__1bfwI {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .react-signin-module_container__1gZLB {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n";
var styles = {
  "container": "react-signin-module_container__1gZLB",
  "formContainer": "react-signin-module_formContainer__6OVEs",
  "logo": "react-signin-module_logo__23FsF",
  "heading": "react-signin-module_heading__3FLwR",
  "signUpLinkText": "react-signin-module_signUpLinkText__1WExh",
  "signUpLink": "react-signin-module_signUpLink__kg63b",
  "form": "react-signin-module_form__npZjX",
  "srOnly": "react-signin-module_srOnly__1h3J4",
  "inputGroup": "react-signin-module_inputGroup__2AV7v",
  "email": "react-signin-module_email__1bfwI",
  "password": "react-signin-module_password__35vf-",
  "aboveSubmitContainer": "react-signin-module_aboveSubmitContainer__sHGSk",
  "rememberMeContainer": "react-signin-module_rememberMeContainer__1gBmN",
  "rememberMe": "react-signin-module_rememberMe__2Acnp",
  "rememberMeLabel": "react-signin-module_rememberMeLabel__3fTfj",
  "forgotPasswordContainer": "react-signin-module_forgotPasswordContainer__220Xg",
  "forgotPasswordLink": "react-signin-module_forgotPasswordLink__2GROD",
  "submitButton": "react-signin-module_submitButton__15d37"
};
styleInject(css_248z);

function SignIn() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.formContainer
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    className: styles.logo,
    src: "../../../public/logo.svg",
    alt: "Vision"
  }), /*#__PURE__*/React__default["default"].createElement("h2", {
    className: styles.heading
  }, "Sign in to your account"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: styles.signUpLinkText
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "#"
  }, "Need an account?"))), /*#__PURE__*/React__default["default"].createElement("form", {
    className: styles.form,
    action: "#",
    method: "POST"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "hidden",
    name: "remember",
    defaultValue: "true"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.inputGroup
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "email-address",
    className: styles.srOnly
  }, "Email address"), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: styles.email,
    placeholder: "Email address"
  })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "password",
    className: styles.srOnly
  }, "Password"), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: styles.password,
    placeholder: "Password"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.aboveSubmitContainer
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.rememberMeContainer
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    id: "remember-me",
    name: "remember-me",
    type: "checkbox",
    className: styles.rememberMe
  }), /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "remember-me",
    className: styles.rememberMeLabel
  }, "Remember Me")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.forgotPasswordContainer
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "#",
    className: styles.forgotPasswordLink
  }, "Forgot your password?"))), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("button", {
    type: "submit",
    className: styles.submitButton
  }, "Sign In")))));
}

exports.Button = Button;
exports.Footer = Footer;
exports.SignIn = SignIn;
