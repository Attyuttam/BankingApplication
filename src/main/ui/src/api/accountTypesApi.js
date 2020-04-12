import {handleError, handleResponse} from "./apiUtils";

export function getAccountTypes(){
    return fetch("http://localhost:8080/accountTypes",{
        method: "GET",
        headers: {'authorization': 'Bearer ' + sessionStorage.getItem("token")}
    })
        .then(handleResponse)
        .catch(handleError);
}