import {keys} from "./keys";

export async function post(destination:string, json:any) {
    return await fetch(destination, {
        method: 'POST',
        mode: "no-cors",
        body: JSON.stringify(json)
    });
}

export function setAllKeyIndexes(keyIndex: 0|1|2) {
    keys.forEach(key => {
        key.keyIndex = keyIndex;
    });
}
