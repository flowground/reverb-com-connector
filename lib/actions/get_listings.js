/**
 * Auto-generated action file for "reverb" API.
 *
 * Generated at: 2019-05-07T14:43:52.954Z
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
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "query",
    "auction_price_max",
    "category",
    "product_type",
    "conditions",
    "decade",
    "finish",
    "handmade",
    "item_city",
    "item_country",
    "item_region",
    "item_state",
    "make",
    "model",
    "must_not",
    "price_max",
    "price_min",
    "currency",
    "year_max",
    "year_min",
    "accepts_gift_cards",
    "preferred_seller",
    "shop",
    "shop_id",
    "listing_type",
    "ships_to",
    "exclude_auctions",
    "accepts_payment_plans",
    "watchers_count_min",
    "not_ids",
    "page",
    "per_page",
    "offset"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "query": "query",
    "auction_price_max": "auction_price_max",
    "category": "category",
    "product_type": "product_type",
    "conditions": "conditions",
    "decade": "decade",
    "finish": "finish",
    "handmade": "handmade",
    "item_city": "item_city",
    "item_country": "item_country",
    "item_region": "item_region",
    "item_state": "item_state",
    "make": "make",
    "model": "model",
    "must_not": "must_not",
    "price_max": "price_max",
    "price_min": "price_min",
    "currency": "currency",
    "year_max": "year_max",
    "year_min": "year_min",
    "accepts_gift_cards": "accepts_gift_cards",
    "preferred_seller": "preferred_seller",
    "shop": "shop",
    "shop_id": "shop_id",
    "listing_type": "listing_type",
    "ships_to": "ships_to",
    "exclude_auctions": "exclude_auctions",
    "accepts_payment_plans": "accepts_payment_plans",
    "watchers_count_min": "watchers_count_min",
    "not_ids": "not_ids",
    "page": "page",
    "per_page": "per_page",
    "offset": "offset"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/listings',
        method: 'get',
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