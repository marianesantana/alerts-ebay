const Ebay = require("ebay-node-api")
const axios = require("axios")

export function getKey(){
    const ebay = new Ebay({
        cliendId: process.env.EBAY_KEY,
        secret: process.env.SECRET,
        body: {
            type: "client-credentials"
        }
    })
}