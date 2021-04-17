

export const API_ROOT = "http://localhost:3000/";

export function api(url){

    return fetch(API_ROOT + url).then(x=> x.json());

}