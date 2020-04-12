import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import AuthenticationService from "../services/AuthenticationService";


export function login_logout(aca) {
    // Hey dispatcher, go tell all the stores that a ACA was just created.
    dispatcher.dispatch({
        actionType: AuthenticationService.isUserLoggedIn()?actionTypes.USER_LOGIN: actionTypes.USER_LOGOUT
    });
}