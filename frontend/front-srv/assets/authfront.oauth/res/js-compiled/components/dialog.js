'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Auth = require('../containers/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _OIDCProvider = require('../containers/OIDCProvider');

var _OIDCProvider2 = _interopRequireDefault(_OIDCProvider);

var _oidc = require('../services/oidc');

var _oidc2 = _interopRequireDefault(_oidc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginDialog = function (_React$Component) {
    _inherits(LoginDialog, _React$Component);

    function LoginDialog() {
        _classCallCheck(this, LoginDialog);

        return _possibleConstructorReturn(this, (LoginDialog.__proto__ || Object.getPrototypeOf(LoginDialog)).apply(this, arguments));
    }

    _createClass(LoginDialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Mounting");
            this.props.signIn();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return LoginDialog;
}(_react2.default.Component);

var Dialog = function (_React$Component2) {
    _inherits(Dialog, _React$Component2);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _OIDCProvider2.default,
                { oidc: _oidc2.default },
                _react2.default.createElement(
                    _Auth2.default,
                    null,
                    function (auth) {
                        return _react2.default.createElement(LoginDialog, auth);
                    }
                )
            );
        }
    }]);

    return Dialog;
}(_react2.default.Component);

exports.default = Dialog;
//# sourceMappingURL=dialog.js.map
