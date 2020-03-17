import {handleError, handleResponse} from "./apiUtils";


export function saveACA(aca) {
    return fetch("http://localhost:8080/addAca", {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...aca
        })
    })
        .then(handleResponse)
        .catch(handleError);
}


export function getAcas(){
    return fetch("http://localhost:8080/getAllAca")
        .then(handleResponse)
        .catch(handleError);
}