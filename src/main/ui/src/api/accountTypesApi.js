import {handleError, handleResponse} from "./apiUtils";

export function getAccountTypes(){
    return fetch("http://localhost:8080/accountTypes")
        .then(handleResponse)
        .catch(handleError);
}