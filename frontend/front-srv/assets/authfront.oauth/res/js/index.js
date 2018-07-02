import Auth from "containers/Auth";
import OIDCProvider from "containers/OIDCProvider";
import oidc from "services/oidc";

window.OAuth = {
    Auth: Auth,
    OIDCProvider: OIDCProvider,
    oidc: oidc,
    login: () => console.log("whatever")
}
