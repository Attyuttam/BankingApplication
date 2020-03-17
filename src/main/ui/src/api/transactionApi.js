import {handleError, handleResponse} from "./apiUtils";

export function getTransactions(startDate, endDate){
    const url = "http://localhost:8080/getTransactionsInRange/From/"+startDate+"/To/"+endDate;
    return fetch(url)
        .then(handleResponse)
        .catch(handleError)
}