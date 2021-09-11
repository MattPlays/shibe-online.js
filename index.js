const fetch = require("node-fetch");
const paths = {
    shibes: "http://shibe.online/api/shibes",
    cats: "http://shibe.online/api/cats",
    birds: "http://shibe.online/api/birds"
}
module.exports = {
    /**
     * @param {number} [count] - The number of images to be returned. Default is 1.
     * @returns {Promise<string | string[]>}
     * @example
     * const {GetShibe} = require("shibe-online.js");
     * GetShibe(1).then(console.log)
     */
    async GetShibe(count = 1) {
        if(count < 1 || count > 100) throw new Error(`[ShibeError]: count must be an integer between 1-100`)
        const url = `${paths.shibes}?count=${count}`;
        const options = {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }
        return fetch(url, options).then(data => data.json()).then((data) => {
            return (count === 1) ? data[0]: data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * @param {number} [count] - The number of images to be returned. Default is 1.
     * @returns {Promise<string | string[]>}
     * @example
     * const {GetCat} = require("shibe-online.js");
     * GetCat(1).then(console.log)
     */
    async GetCat(count = 1) {
        if(count < 1 || count > 100) throw new Error(`[ShibeError]: count must be an integer between 1-100`)
        const url = `${paths.cats}?count=${count}`;
        const options = {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }
        return fetch(url, options).then(data => data.json()).then((data) => {
            return (count === 1) ? data[0]: data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * @param {number} [count] - The number of images to be returned. Default is 1.
     * @returns {Promise<string | string[]>}
     * @example
     * const {GetBird} = require("shibe-online.js");
     * GetBird(1).then(console.log)
     */
    async GetBird(count = 1) {
        if(count < 1 || count > 100) throw new Error(`[ShibeError]: count must be an integer between 1-100`)
        const url = `${paths.birds}?count=${count}`;
        const options = {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }
        return fetch(url, options).then(data => data.json()).then((data) => {
            return (count === 1) ? data[0]: data;
        }).catch((err) => {throw new Error(err)});
    }
}