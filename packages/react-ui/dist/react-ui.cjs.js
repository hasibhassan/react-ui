'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z = ".react-button-module_button__2oxCj {\n  color: red;\n}\n";
var styles = {
  "button": "react-button-module_button__2oxCj"
};
styleInject(css_248z);

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: styles.button
  }, children);
};

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("p", null, children);
};

exports.Button = Button;
exports.Footer = Footer;
