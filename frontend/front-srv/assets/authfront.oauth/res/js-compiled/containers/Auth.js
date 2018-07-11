'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INITIAL_STATE = {
  uid: '',
  isAnonymous: null
  // // some other properties from the user object that may be useful
  // email: '',
  // displayName: '',
  // photoURL: '',
};

var Auth = function (_React$Component) {
  _inherits(Auth, _React$Component);

  function Auth() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Auth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Auth.__proto__ || Object.getPrototypeOf(Auth)).call.apply(_ref, [this].concat(args))), _this), _this.state = INITIAL_STATE, _this.handleSignIn = function (provider) {
      var userManager = _this.context.oidc.userManager;


      userManager.signinPopup();

      // const { auth } = this.context.firebase;
      //
      // switch (provider) {
      //   // the auth listener will handle the success cases
      //   case 'google':
      //     return auth()
      //       .signInWithPopup(new auth.GoogleAuthProvider())
      //       .catch(error => {
      //         // eslint-disable-next-line no-console
      //         console.error(error);
      //         // TODO: notify the user of the error
      //         return error;
      //       });
      //
      //   case 'anonymous':
      //     return auth()
      //       .signInAnonymously()
      //       .catch(error => {
      //         // eslint-disable-next-line no-console
      //         console.error(error);
      //         // TODO: notify the user of the error
      //         return error;
      //       });
      //
      //   default:
      //     const reason = 'Invalid provider passed to signIn method';
      //     // eslint-disable-next-line no-console
      //     console.error(reason);
      //     return Promise.reject(reason);
      // }
    }, _this.handleSignOut = function () {
      var auth = _this.context.firebase.auth;


      return auth().signOut();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Auth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var userManager = this.context.oidc.userManager;


      userManager.events.addUserLoaded(function (loadedUser) {
        console.log("HERE WE GO", loadedUser);
      });

      //
      // // onAuthStateChanged returns an unsubscribe method
      // this.stopAuthListener = auth().onAuthStateChanged(user => {
      //   if (user) {
      //     // if user exists sign-in!
      //     this.signIn(user);
      //   } else {
      //     // otherwise sign-out!
      //     this.signOut();
      //   }
      // });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // this.stopAuthListener();
    }
  }, {
    key: 'signIn',
    value: function signIn(user) {
      var uid = user.uid,
          isAnonymous = user.isAnonymous;


      this.setState({
        uid: uid,
        isAnonymous: isAnonymous
      });
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      this.setState(INITIAL_STATE);
    }
  }, {
    key: 'render',
    value: function render() {
      // If uid doesn't exist in state, the user is not signed in.
      // A uid will exist if the user is signed in anonymously.
      // We'll consider anonymous users as unauthed for this variable.
      var isAuthed = !!(this.state.uid && !this.state.isAnonymous);

      return this.props.children(_extends({}, this.state, {
        signIn: this.handleSignIn,
        signOut: this.handleSignOut,
        isAuthed: isAuthed
      }));
    }
  }]);

  return Auth;
}(_react2.default.Component);

Auth.propTypes = {
  children: _propTypes2.default.func.isRequired
};
Auth.contextTypes = {
  oidc: _propTypes2.default.object
};
exports.default = Auth;
//# sourceMappingURL=Auth.js.map
