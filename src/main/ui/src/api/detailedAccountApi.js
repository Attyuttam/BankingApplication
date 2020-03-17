import { handleResponse, handleError } from "./apiUtils";
const REACT_APP_API_URL = "localhost:8080";
const baseUrl = REACT_APP_API_URL + "/allDetailedAccountTransactions/";

export function getDetailedAccounts() {
    return fetch("http://localhost:8080/allDetailedAccountTransactions")
        .then(handleResponse)
        .catch(handleError);
}