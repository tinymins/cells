"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OIDCProvider = require("./containers/OIDCProvider");

var _OIDCProvider2 = _interopRequireDefault(_OIDCProvider);

var _oidc = require("./services/oidc");

var _oidc2 = _interopRequireDefault(_oidc);

var _dialog = require("./components/dialog");

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.OAuth = {
    Dialog: _dialog2.default,
    OIDCProvider: _OIDCProvider2.default,
    oidc: _oidc2.default,
    login: function login(props) {
        console.log("Opening happens multiple times");
        pydio.UI.openComponentInModal('OAuth', 'Dialog', _extends({}, props, { blur: true }));
    }
};
//# sourceMappingURL=index.js.map
