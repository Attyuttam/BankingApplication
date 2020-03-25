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

    getTransactionBySlug(slug) {
        const test =_transactions.find(transaction => transaction.transactionID === slug);
        //console.log("TR FROM SLUG: "+JSON.stringify(test));
        return test;
    }
}
const store = new TransactionStore();
Dispatcher.register(action => {
    if(action.actionType === actionTypes.CREATE_TRANSACTION){
        _transactions.push(action.transaction);
        store.emitChange();
    }
    else if(action.actionType === actionTypes.LOAD_TRANSACTIONS){
        _transactions = action.transactions;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.LOAD_TRANSACTIONS_IN_RANGE){
        _transactions = action.transactions;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.LOAD_TRANSACTIONS_BY_CUSTOMER){
        _transactions = action.transactions;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.LOAD_TRANSACTIONS_BY_ACA){
        _transactions = action.transactions;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.LOAD_TRANSACTIONS_BY_ACCOUNT){
        _transactions = action.transactions;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.UPDATE_TRANSACTION){
        _transactions = _transactions.map(transaction =>
            transaction.transactionID === action.transaction.transactionID? action.transaction : transaction
        );
    }
});
export default store;