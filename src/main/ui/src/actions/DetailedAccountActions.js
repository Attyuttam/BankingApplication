import dispatcher from "../appDispatcher";
import * as detailedAccountApi from "../api/detailedAccountApi";
import actionTypes from "./actionTypes";

export function loadDetailedAccounts() {
  return detailedAccountApi.getDetailedAccounts().then(accounts => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_DETAILED_ACCOUNT_DETAILS,
      accounts: accounts
    });
  });
}