import React, {useEffect, useState} from "react";
import TextInput from "./common/textInput";
import accountStore from "../store/accountStore";
import acaStore from "../store/acaStore";
import {loadAccounts} from "../actions/accountActions";
import {loadAcas} from "../actions/acaActions";


function TransactionForm(props) {
    const [accounts, setAccounts] =  useState(accountStore.getAccounts());
    const [acas, setAcas] = useState(acaStore.getAcas());

    //console.log("TR FORM: "+JSON.stringify(props.transaction));
    useEffect(() => {
        accountStore.addChangeListener(onChange);
        acaStore.addChangeListener(onChange);
        if(accountStore.getAccounts().length === 0) loadAccounts();
        if(acaStore.getAcas().length === 0) loadAcas();
        return () => {accountStore.removeChangeListener(onChange);acaStore.removeChangeListener(onChange);}
    },[]);

    function onChange(){
        setAccounts(accountStore.getAccounts());
        setAcas(acaStore.getAcas());
    }
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="transactionAmount"
                label="Transaction Amount"
                onChange={props.onChange}
                name="transactionAmount"
                value={props.transaction.transactionAmount}
                error={props.errors.transactionAmount}
            />

            <div className="form-group">
                <label htmlFor="account">Account</label>
                <div className="field">
                    <select
                        id="accountID"
                        name="accountID"
                        onChange={props.onChange}
                        value={props.transaction.accountID || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {accounts.map(account => {
                            return(
                                <option key={account.accountID} value={account.accountID}>{account.accountID}</option>
                            );
                        })}
                    </select>
                </div>
                {props.errors.accountID && (
                    <div className="alert alert-danger">{props.errors.accountID}</div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="aca">ACA</label>
                <div className="field">
                    <select
                        id="acaID"
                        name="acaID"
                        onChange={props.onChange}
                        value={props.transaction.acaID || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {acas.map(aca => {
                            return(
                                <option key={aca.acaID} value={aca.acaID}>{aca.acaID}({aca.acaName})</option>
                            );
                        })}
                    </select>
                </div>
                {props.errors.acaID && (
                    <div className="alert alert-danger">{props.errors.acaID}</div>
                )}
            </div>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

/*
CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
*/
TextInput.defaultProps = {
    error: ""
};

export default TransactionForm;
