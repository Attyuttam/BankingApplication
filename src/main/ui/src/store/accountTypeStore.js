import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _accountTypes = [];

class AccountTypeStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getAccountTypes(){
        return _accountTypes;
    }
}
const store = new AccountTypeStore();
Dispatcher.register(action => {
    if(action.actionType === actionTypes.LOAD_ACCOUNT_TYPES){
        _accountTypes = action.accountTypes;
        store.emitChange();
    }
});
export default store;