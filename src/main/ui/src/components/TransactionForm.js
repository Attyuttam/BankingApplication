import React, {useEffect, useState} from "react";
import TextInput from "./common/textInput";
import accountStore from "../store/accountStore";
import acaStore from "../store/acaStore";
import {loadAccounts} from "../actions/accountActions";
import {loadAcas} from "../actions/acaActions";


function TransactionForm(props) {
    const [accounts, setAccounts] =  useState(accountStore.getAccounts());
    const [acas, setAcas] = useState(acaStore.getAcas());

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
                        id="account"
                        name="account"
                        onChange={props.onChange}
                        value={props.transaction.account || ""}
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
                {props.errors.account && (
                    <div className="alert alert-danger">{props.errors.account}</div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="aca">ACA</label>
                <div className="field">
                    <select
                        id="aca"
                        name="aca"
                        onChange={props.onChange}
                        value={props.transaction.aca || ""}
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
                {props.errors.aca && (
                    <div className="alert alert-danger">{props.errors.aca}</div>
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
