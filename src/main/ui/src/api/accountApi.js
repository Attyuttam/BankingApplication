import {handleError, handleResponse} from "./apiUtils";

export function saveAccount(account) {
    console.log("ACCOUNT TO BE SAVED: "+JSON.stringify({
        ...account
    }));
    return fetch("http://localhost:8080/addAccount", {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...account
        })
    })
        .then(handleResponse)
        .catch(handleError);
}
export function getAccounts(){
    return fetch("http://localhost:8080/allAccounts")
        .then(handleResponse)
        .catch(handleError)
}