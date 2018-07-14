import {Log, UserManager} from "oidc-client"

var config = {
    authority: 'http://127.0.0.1:62134/dex',
    client_id: "cells-front",
    popup_redirect_uri: "http://192.168.1.78:8080/plug/authfront.oauth/res/popup.html",
    response_type: "id_token token",
    scope: "openid profile pydio",
    loadUserInfo: false
};

class OpenIDConnect {
  constructor() {
      this.userManager = new UserManager(config);
      Log.logger = console
      Log.level = Log.INFO;
  }
}

export default new OpenIDConnect();
