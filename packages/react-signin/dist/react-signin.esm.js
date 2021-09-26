import React from 'react';

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
var styles = {"container":"react-signin-module_container__1gZLB","formContainer":"react-signin-module_formContainer__6OVEs","logo":"react-signin-module_logo__23FsF","heading":"react-signin-module_heading__3FLwR","signUpLinkText":"react-signin-module_signUpLinkText__1WExh","signUpLink":"react-signin-module_signUpLink__kg63b","form":"react-signin-module_form__npZjX","srOnly":"react-signin-module_srOnly__1h3J4","inputGroup":"react-signin-module_inputGroup__2AV7v","email":"react-signin-module_email__1bfwI","password":"react-signin-module_password__35vf-","aboveSubmitContainer":"react-signin-module_aboveSubmitContainer__sHGSk","rememberMeContainer":"react-signin-module_rememberMeContainer__1gBmN","rememberMe":"react-signin-module_rememberMe__2Acnp","rememberMeLabel":"react-signin-module_rememberMeLabel__3fTfj","forgotPasswordContainer":"react-signin-module_forgotPasswordContainer__220Xg","forgotPasswordLink":"react-signin-module_forgotPasswordLink__2GROD","submitButton":"react-signin-module_submitButton__15d37"};
styleInject(css_248z);

function SignIn() {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.formContainer
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: styles.logo,
    src: "logo.svg",
    alt: "Vision"
  }), /*#__PURE__*/React.createElement("h2", {
    className: styles.heading
  }, "Sign in to your account"), /*#__PURE__*/React.createElement("p", {
    className: styles.signUpLinkText
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Need an account?"))), /*#__PURE__*/React.createElement("form", {
    className: styles.form,
    action: "#",
    method: "POST"
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "remember",
    defaultValue: "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.inputGroup
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email-address",
    className: styles.srOnly
  }, "Email address"), /*#__PURE__*/React.createElement("input", {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: styles.email,
    placeholder: "Email address"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: styles.srOnly
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: styles.password,
    placeholder: "Password"
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.aboveSubmitContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.rememberMeContainer
  }, /*#__PURE__*/React.createElement("input", {
    id: "remember-me",
    name: "remember-me",
    type: "checkbox",
    className: styles.rememberMe
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "remember-me",
    className: styles.rememberMeLabel
  }, "Remember Me")), /*#__PURE__*/React.createElement("div", {
    className: styles.forgotPasswordContainer
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: styles.forgotPasswordLink
  }, "Forgot your password?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: styles.submitButton
  }, "Sign In")))));
}

export { SignIn as default };
