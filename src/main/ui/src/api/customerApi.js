import {handleError, handleResponse} from "./apiUtils";


export function saveCustomer(customer) {
    return fetch("http://localhost:8080/addCustomer", {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...customer
        })
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getCustomers(){
    return fetch("http://localhost:8080/customers")
        .then(handleResponse)
        .catch(handleError)
}