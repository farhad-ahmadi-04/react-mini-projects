"use strict";

/**
 * 
 * @returns - data
 * get data from json file and pars it and in the end return the data
 */
async function data() {
    return await (await (fetch("./data.json"))).json();
}
export default data