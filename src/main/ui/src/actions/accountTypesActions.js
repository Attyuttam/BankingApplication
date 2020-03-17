import * as accountTypesApi from "../api/accountTypesApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadAccountTypes(){
    return accountTypesApi.getAccountTypes().then(accountTypes => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_ACCOUNT_TYPES,
            accountTypes: accountTypes
        })
    })
}