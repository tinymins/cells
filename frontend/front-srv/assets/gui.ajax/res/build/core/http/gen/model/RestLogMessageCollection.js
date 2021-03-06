/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LogLogMessage = require('./LogLogMessage');

var _LogLogMessage2 = _interopRequireDefault(_LogLogMessage);

/**
* The RestLogMessageCollection model module.
* @module model/RestLogMessageCollection
* @version 1.0
*/

var RestLogMessageCollection = (function () {
    /**
    * Constructs a new <code>RestLogMessageCollection</code>.
    * @alias module:model/RestLogMessageCollection
    * @class
    */

    function RestLogMessageCollection() {
        _classCallCheck(this, RestLogMessageCollection);

        this.Logs = undefined;
    }

    /**
    * Constructs a <code>RestLogMessageCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestLogMessageCollection} obj Optional instance to populate.
    * @return {module:model/RestLogMessageCollection} The populated <code>RestLogMessageCollection</code> instance.
    */

    RestLogMessageCollection.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestLogMessageCollection();

            if (data.hasOwnProperty('Logs')) {
                obj['Logs'] = _ApiClient2['default'].convertToType(data['Logs'], [_LogLogMessage2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/LogLogMessage>} Logs
    */
    return RestLogMessageCollection;
})();

exports['default'] = RestLogMessageCollection;
module.exports = exports['default'];
