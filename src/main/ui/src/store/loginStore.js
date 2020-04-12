import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import AuthenticationService from "../services/AuthenticationService";

const CHANGE_EVENT = "change";
let userLogged = AuthenticationService.isUserLoggedIn();

class LoginStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getUserLogged(){
        return userLogged;
    }
}
const store = new LoginStore();
Dispatcher.register(action => {
    if(action.actionType === actionTypes.USER_LOGIN){
        userLogged = true;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.USER_LOGOUT){
        userLogged = false;
        store.emitChange();
    }
});
export default store;