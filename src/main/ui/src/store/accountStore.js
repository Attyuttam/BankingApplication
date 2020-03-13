import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = 'change';
let _accounts = [];

class AccountStore extends EventEmitter{
    addChangeListener(callback){
        this.addListener(CHANGE_EVENT,callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getAccounts(){
        return _accounts;
    }
}
const store = new AccountStore();
Dispatcher.register(action => {
    if(action.actionType === actionTypes.LOAD_ACCOUNTS){
        _accounts = action.accounts;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.CREATE_ACCOUNT){
        _accounts.push(action.account);
        console.log(_accounts);
        store.emitChange();
    }
});
export  default store;