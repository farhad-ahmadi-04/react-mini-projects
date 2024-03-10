export default async function data() {
    return await (await (fetch("./js/module/data.json"))).json();
}

