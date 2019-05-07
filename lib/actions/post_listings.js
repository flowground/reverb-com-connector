/**
 * Auto-generated action file for "reverb" API.
 *
 * Generated at: 2019-05-07T14:43:52.955Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / reverb-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/listings'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "categories": "categories",
    "uuid": "uuid",
    "condition": "condition",
    "description": "description",
    "exclusive_channel": "exclusive_channel",
    "finish": "finish",
    "has_inventory": "has_inventory",
    "inventory": "inventory",
    "country_code": "country_code",
    "locality": "locality",
    "region": "region",
    "location": "location",
    "make": "make",
    "model": "model",
    "multi_item": "multi_item",
    "offers_enabled": "offers_enabled",
    "origin_country_code": "origin_country_code",
    "photos": "photos",
    "lead_time": "lead_time",
    "lead_time_unit": "lead_time_unit",
    "ship_date": "ship_date",
    "preorder_info": "preorder_info",
    "amount": "amount",
    "currency": "currency",
    "price": "price",
    "prop_65_warning": "prop_65_warning",
    "publish": "publish",
    "paypal_email": "paypal_email",
    "seller": "seller",
    "seller_cost": "seller_cost",
    "local": "local",
    "rates": "rates",
    "shipping": "shipping",
    "shipping_profile_id": "shipping_profile_id",
    "shipping_profile_name": "shipping_profile_name",
    "sku": "sku",
    "sold_as_is": "sold_as_is",
    "storage_location": "storage_location",
    "tax_exempt": "tax_exempt",
    "title": "title",
    "upc": "upc",
    "upc_does_not_apply": "upc_does_not_apply",
    "videos": "videos",
    "year": "year",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['oauth2'] = {token: cfg['oauth2']};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/listings',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}