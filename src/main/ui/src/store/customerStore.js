import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _customers = [];

class CustomerStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getCustomers(){
        return _customers;
    }
}
const store = new CustomerStore();
Dispatcher.register(action => {
   if(action.actionType === actionTypes.LOAD_CUSTOMERS){
       _customers = action.customers;
       store.emitChange();
   } else if(action.actionType === actionTypes.CREATE_CUSTOMER){
       _customers.push(action.customer);
       store.emitChange();
   }
});
export default store;