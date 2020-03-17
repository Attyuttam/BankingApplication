import * as transactionApi from "../api/transactionApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadTransactionsByRange(startDate, endDate) {
    return transactionApi.getTransactions(startDate,endDate).then(transactions => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TRANSACTIONS,
            transactions: transactions
        });
    });
}