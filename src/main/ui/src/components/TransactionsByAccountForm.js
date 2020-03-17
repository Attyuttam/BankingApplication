import React, {useEffect, useState} from "react";
import TextInput from "./common/textInput";
import accountStore from "../store/accountStore";
import {loadCustomers} from "../actions/customerActions";
import {loadAccounts} from "../actions/accountActions";
//import PropTypes from "prop-types";

function TransactionsByAccountForm(props) {
    const [accounts, setAccounts] = useState(accountStore.getAccounts);

    useEffect(() => {
        accountStore.addChangeListener(onChange);
        if(accountStore.getAccounts().length === 0)loadAccounts();
        return () => {accountStore.removeChangeListener(onChange);}
    },[]);

    function onChange(){
        setAccounts(accountStore.getAccounts());
    }
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="Account">Account</label>
                <div className="field">
                    <select
                        id="accountID"
                        name="accountID"
                        onChange={props.onChange}
                        value={props.account.accountID || ""}
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

            <input type="submit" value="View" className="btn btn-primary" />
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

export default TransactionsByAccountForm;
