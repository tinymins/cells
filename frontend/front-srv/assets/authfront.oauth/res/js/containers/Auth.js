import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  uid: '',
  isAnonymous: null,
  // // some other properties from the user object that may be useful
  // email: '',
  // displayName: '',
  // photoURL: '',
};

class Auth extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  static contextTypes = {
      oidc: PropTypes.object,
  };

  state = INITIAL_STATE;

  componentDidMount() {
      const { userManager } = this.context.oidc;

      userManager.events.addUserLoaded((loadedUser) => this.signIn(loadedUser));
  }

  handleSignIn = provider => {
      const { userManager } = this.context.oidc;


      userManager.getUser()
        .then((user) => {
            if (!user) {
                throw "User not found"
            }

            this.signIn(user)
        })
        .catch(() => {
            console.log("Signin popup")
            userManager.signinPopup()
        });
  };

  handleSignOut = () => {
    const { userManager } = this.context.oidc;

    userManager.signoutPopup();

    pydio.loadXmlRegistry();
  };

  signIn(user) {
    const { id_token, expires_at } = user;

    PydioApi.JWT_DATA = {
         jwt: id_token,
         expirationTime: expires_at
    };

    pydio.loadXmlRegistry();

    this.setState({
      idToken: id_token,
    });
  }

  signOut() {
      this.setState(INITIAL_STATE);
  }

  render() {
      const isAuthed = !!this.state.idToken;
      return this.props.children({
          ...this.state,
          signIn: this.handleSignIn.bind(this),
          signOut: this.handleSignOut.bind(this),
          isAuthed,
      });
  }
}

export default Auth;
