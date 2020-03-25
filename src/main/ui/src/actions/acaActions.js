import * as acaApi from '../api/acaApi';
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function saveACA(aca) {
    //console.log("ACA ACTION SAVED: "+JSON.stringify(aca));
    return acaApi.saveACA(aca).then(savedACA => {
        // Hey dispatcher, go tell all the stores that a ACA was just created.
        dispatcher.dispatch({
            actionType: aca.acaID ? actionTypes.UPDATE_ACA : actionTypes.CREATE_ACA,
            aca: savedACA
        });
    });
}

export function loadAcas(){
  return acaApi.getAcas().then(acas => {
      dispatcher.dispatch({
          actionType: actionTypes.LOAD_ACAS,
          acas: acas
      })
  })
}