import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as customerApi from "../api/customerApi";


export function saveCustomer(customer) {
    return customerApi.saveCustomer(customer).then(savedCustomer => {
        // Hey dispatcher, go tell all the stores that a ACA was just created.
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_CUSTOMER,
            customer: savedCustomer
        });
    });
}
export function loadCustomers() {
    return customerApi.getCustomers().then(customers => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_CUSTOMERS,
            customers: customers
        });
    });
}