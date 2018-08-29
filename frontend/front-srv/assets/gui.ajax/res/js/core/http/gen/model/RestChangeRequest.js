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


import ApiClient from '../ApiClient';





/**
* The RestChangeRequest model module.
* @module model/RestChangeRequest
* @version 1.0
*/
export default class RestChangeRequest {
    /**
    * Constructs a new <code>RestChangeRequest</code>.
    * @alias module:model/RestChangeRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestChangeRequest} obj Optional instance to populate.
    * @return {module:model/RestChangeRequest} The populated <code>RestChangeRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestChangeRequest();

            
            
            

            if (data.hasOwnProperty('SeqID')) {
                obj['SeqID'] = ApiClient.convertToType(data['SeqID'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('flatten')) {
                obj['flatten'] = ApiClient.convertToType(data['flatten'], 'Boolean');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} SeqID
    */
    SeqID = undefined;
    /**
    * @member {String} filter
    */
    filter = undefined;
    /**
    * @member {Boolean} flatten
    */
    flatten = undefined;
    /**
    * @member {Boolean} stream
    */
    stream = undefined;








}

