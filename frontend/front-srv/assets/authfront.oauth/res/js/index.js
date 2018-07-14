import React from 'react'
import OIDCProvider from "./containers/OIDCProvider";
import oidc from "./services/oidc";
import Dialog from "./components/dialog";
import LogoutDialog from "./components/logout";

window.OAuth = {
    Dialog: Dialog,
    LogoutDialog: LogoutDialog,
    OIDCProvider: OIDCProvider,
    oidc: oidc,
    login: (props) => {
        pydio.UI.openComponentInModal('OAuth', 'Dialog', {...props, blur: true})
    },
    logout: (props) => {
        pydio.UI.openComponentInModal('OAuth', 'LogoutDialog', {...props, blur: true})
    }
}
