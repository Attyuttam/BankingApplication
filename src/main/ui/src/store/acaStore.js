import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _acas = [];

class ACAStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getAcas(){
        return _acas;
    }

    getCourseByACA(slug) {
        return _acas.find(aca => aca.acaID === slug);
    }
}
const store = new ACAStore();
Dispatcher.register(action => {
    if(action.actionType === actionTypes.LOAD_ACAS){
        _acas = action.acas;
        store.emitChange();
    }
    else if(action.actionType === actionTypes.CREATE_ACA){
        _acas.push(action.aca);
        store.emitChange();
    }
    else if(action.actionType === actionTypes.UPDATE_ACA){
        _acas = _acas.map(aca =>
            aca.acaID === action.aca.acaID ? action.aca : aca
        );
        store.emitChange();
    }
});
export default store;