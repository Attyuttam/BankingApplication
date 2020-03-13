import {EventEmitter} from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _accounts = [];

class DetailedAccountsStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getDetailedAccounts() {
    return _accounts;
  }

  /*getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }*/
}

const store = new DetailedAccountsStore();

Dispatcher.register(action => {
  if (action.actionType === actionTypes.LOAD_DETAILED_ACCOUNT_DETAILS) {
    _accounts = action.accounts;
    store.emitChange();
  }
});
export default store;
