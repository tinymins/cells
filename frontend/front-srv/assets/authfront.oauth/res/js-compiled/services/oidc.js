"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oidcClient = require("oidc-client");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    authority: 'http://127.0.0.1:53205/dex',
    client_id: "cells-front",
    popup_redirect_uri: "http://172.17.2.104:8080/plug/authfront.oauth/res/popup.html",
    response_type: "id_token token",
    scope: "openid profile"
};

var OpenIDConnect = function OpenIDConnect() {
    _classCallCheck(this, OpenIDConnect);

    this.userManager = new _oidcClient.UserManager(config);
    _oidcClient.Log.logger = console;
    _oidcClient.Log.level = _oidcClient.Log.INFO;
};

exports.default = new OpenIDConnect();
//# sourceMappingURL=oidc.js.map
