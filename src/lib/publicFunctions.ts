
export async function post(destination:string, json:any) {
    return await fetch(destination, {
        method: 'POST',
        mode: "no-cors",
        body: JSON.stringify(json)
    });
}
