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

    getAccountBySlug(slug) {

        const test =  _accounts.find(account => account.accountID === slug);
        console.log("ac slug: "+JSON.stringify(test));
        return test;
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
        store.emitChange();
    }
    else if(action.actionType === actionTypes.UPDATE_ACCOUNT){
        _accounts = _accounts.map(account => account.accountID === action.account.accountID?action.account: account);
        store.emitChange();
    }
});
export  default store;