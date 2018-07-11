import {Log, UserManager} from "oidc-client"

var config = {
    authority: 'http://127.0.0.1:53205/dex',
    client_id: "cells-front",
    popup_redirect_uri: "http://172.17.2.104:8080/plug/authfront.oauth/res/popup.html",
    response_type: "id_token token",
    scope: "openid profile"
};

class OpenIDConnect {
  constructor() {
      this.userManager = new UserManager(config);
      Log.logger = console
      Log.level = Log.INFO;
  }
}

export default new OpenIDConnect();
