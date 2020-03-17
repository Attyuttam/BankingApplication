import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _transactions = [];

class TransactionStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getTransactions(){
        return _transactions;
    }
}
const store = new TransactionStore();
Dispatcher.register(action => {
    if(action.actionType === actionTypes.LOAD_TRANSACTIONS){
        _transactions = action.transactions;
        store.emitChange();
    }
});
export default store;