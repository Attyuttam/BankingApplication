import {handleError, handleResponse} from "./apiUtils";


export function saveCustomer(customer) {
    return fetch("http://localhost:8080/addCustomer", {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json",'authorization': 'Bearer ' + sessionStorage.getItem("token") },
        body: JSON.stringify({
            ...customer
        })
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getCustomers(){
    console.log("CUSTOMER: "+sessionStorage.getItem("token"));
    return fetch("http://localhost:8080/customers",{
        method: "GET",
        headers: {'authorization': 'Bearer ' + sessionStorage.getItem("token")}
    })
        .then(handleResponse)
        .catch(handleError)
}