"use strict";

var _Auth = require("./containers/Auth");

var _Auth2 = _interopRequireDefault(_Auth);

var _OIDCProvider = require("./containers/OIDCProvider");

var _OIDCProvider2 = _interopRequireDefault(_OIDCProvider);

var _oidc = require("./services/oidc");

var _oidc2 = _interopRequireDefault(_oidc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.OAuth = {
    Auth: _Auth2.default,
    OIDCProvider: _OIDCProvider2.default,
    oidc: _oidc2.default,
    login: function login() {
        return console.log("whatever");
    }
};
//# sourceMappingURL=index-compiled.js.map
