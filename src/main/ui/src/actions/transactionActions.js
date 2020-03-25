import * as transactionApi from "../api/transactionApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as accountApi from "../api/accountApi";

export function saveTransaction(transaction){
    //console.log("TO SAVE TR: "+JSON.stringify(transaction));
    return transactionApi.saveTransaction(transaction).then(savedTransaction => {
        dispatcher.dispatch({
            actionType: transaction.transactionID ? actionTypes.UPDATE_TRANSACTION: actionTypes.CREATE_TRANSACTION,
            transaction: savedTransaction
        });
    });
}
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

export function loadTransactions() {
    return transactionApi.getTransactions().then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS,
            transactions: transactions
        });
    });
}

export function loadTransactionsByRange(startDate, endDate) {
    return transactionApi.getTransactionsByRange(startDate,endDate).then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS_IN_RANGE,
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
