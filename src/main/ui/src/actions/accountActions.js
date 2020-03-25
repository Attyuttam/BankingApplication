import dispatcher from "../appDispatcher";
import * as accountApi from '../api/accountApi';
import actionTypes from "./actionTypes";


export function saveAccount(account){
//    console.log("TO SAVE A/C "+JSON.stringify(account));
    return accountApi.saveAccount(account).then(savedAccount => {
        dispatcher.dispatch({
            actionType: account.accountID? actionTypes.UPDATE_ACCOUNT : actionTypes.CREATE_ACCOUNT,
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