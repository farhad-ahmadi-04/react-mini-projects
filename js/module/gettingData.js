"use strict";

/**
 * 
 * @returns - data
 * get data from json file and pars it and in the end return the data
 */
async function data() {
    return await (await (fetch("./js/module/data.JSON"))).json();
}
export default data