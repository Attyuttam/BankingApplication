import dispatcher from "../appDispatcher";
import * as accountApi from '../api/accountApi';
import actionTypes from "./actionTypes";


export function saveAccount(account){
    return accountApi.saveAccount(account).then(savedAccount => {
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_ACCOUNT,
            account: savedAccount
        });
    });
}
export function loadAccounts(){
    return accountApi.getAccounts().then(accounts => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_ACCOUNTS,
            accounts: accounts
        })
    })
}