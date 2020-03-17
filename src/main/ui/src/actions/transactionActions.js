import * as transactionApi from "../api/transactionApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadTransactionsByAccount(accountID) {
    return transactionApi.getTransactionsByAccount(accountID).then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS_BY_ACCOUNT,
            transactions: transactions
        });
    });
}


export function loadTransactionsByACA(acaID) {
    return transactionApi.getTransactionsByACA(acaID).then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS_BY_ACA,
            transactions: transactions
        });
    });
}


export function loadTransactionsByRange(startDate, endDate) {
    return transactionApi.getTransactions(startDate,endDate).then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS,
            transactions: transactions
        });
    });
}

export function loadTransactionsByCustomer(customerID) {
    return transactionApi.getTransactionsByCustomer(customerID).then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS_BY_CUSTOMER,
            transactions: transactions
        });
    });
}