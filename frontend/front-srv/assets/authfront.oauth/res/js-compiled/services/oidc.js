"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oidcClient = require("oidc-client");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    authority: 'http://127.0.0.1:62134/dex',
    client_id: "cells-front",
    redirect_uri: "http://127.0.0.1:5555/callback",
    response_type: "code",
    scope: "openid"
};

var OpenIDConnect = function OpenIDConnect() {
    _classCallCheck(this, OpenIDConnect);

    this.userManager = new _oidcClient.UserManager(config);
};

exports.default = new OpenIDConnect();
//# sourceMappingURL=oidc.js.map
