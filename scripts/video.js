function VideosView(data){

    console.log(`abbet我来转换${data}`)
    if (!data || !data.length) {
        return null;
    }
    let isArray = true;
    try {
        isArray = Array.isArray(JSON.parse(data));
    }
    catch (error) {
        isArray = false;
    }
    let array = Array.isArray(data)
        ? data
        : isArray
            ? JSON.parse(data)
            : data.includes(",")
                ? data.split(",")
                : [data];
    if (!array || array.length == 0) {
        return null;
    }
    return array;//`<a href="https://www.baidu.com" target="_blank">可以下载吧</a>`;
}
function VideosEdit(row, name, model_name){
    console(`**************月老掉线**************`)

    const table = Process("schemas.default.TableGet", model_name);
    const column = table.columns.find((col) => col.name === name);
    if (!column || column.type === "json") {
        return row[name];
    }
    console(`**************月老掉线**************`)
    return JSON.stringify(row[name]);
}