const axios = require("axios").default;
const shibes = axios.create({
    baseURL: "http://shibe.online/api/shibes",
    headers: {
        "Accept": "application/json"
    }
});
const cats = axios.create({
    baseURL: "http://shibe.online/api/cats",
    headers: {
        "Accept": "application/json"
    }
});
const birds = axios.create({
    baseURL: "http://shibe.online/api/birds",
    headers: {
        "Accept": "application/json"
    }
});
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
        return shibes({
            method: "GET",
            params: {
                "count": count
            }
        }).then(({data}) => {
            return (count === 1) ? data[0] : data;
        }).catch((err) => {throw new Error(err)})
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
        return cats({
            method: "GET",
            params: {
                "count": count
            }
        }).then(({data}) => {
            return (count === 1) ? data[0] : data;
        }).catch((err) => {throw new Error(err)})
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
        return birds({
            method: "GET",
            params: {
                "count": count
            }
        }).then(({data}) => {
            return (count === 1) ? data[0] : data;
        }).catch((err) => {throw new Error(err)})
    }
}