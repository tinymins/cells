import React from 'react'
import OIDCProvider from "./containers/OIDCProvider";
import oidc from "./services/oidc";
import Dialog from "./components/dialog";

window.OAuth = {
    Dialog: Dialog,
    OIDCProvider: OIDCProvider,
    oidc: oidc,
    login: (props) => {
        console.log("Opening happens multiple times")
        pydio.UI.openComponentInModal('OAuth', 'Dialog', {...props, blur: true})
    }
}
