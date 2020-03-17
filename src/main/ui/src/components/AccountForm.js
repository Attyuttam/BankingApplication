import React, {useEffect, useState} from "react";
import TextInput from "./common/textInput";
import accountTypeStore from "../store/accountTypeStore";
import customerStore from "../store/customerStore";
import accountStore from "../store/accountStore";
import {loadAccounts} from "../actions/accountActions";
import {loadAccountTypes} from "../actions/accountTypesActions";
import {loadCustomers} from "../actions/customerActions";
//import PropTypes from "prop-types";

//TODO:
// 1. ensure that the account Type options are displayed from the DB (DONE)
// 2. ensure there's a search option for customer which provides details from the DB (DONE)
// 3. Find out what is the value prop used for in select (from the tutorial)

function AccountForm(props) {
    const [accountTypes, setAccountTypes] =  useState(accountTypeStore.getAccountTypes());
    const [customers, setCustomers] = useState(customerStore.getCustomers());

    useEffect(() => {
        accountTypeStore.addChangeListener(onChange);
        customerStore.addChangeListener(onChange);
        if(accountTypeStore.getAccountTypes().length === 0) loadAccountTypes();
        if(customerStore.getCustomers().length === 0)loadCustomers();
        return () => {accountTypeStore.removeChangeListener(onChange);customerStore.removeChangeListener(onChange);}
    },[]);

    function onChange(){
        setAccountTypes(accountTypeStore.getAccountTypes());
        setCustomers(customerStore.getCustomers());
    }
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="accountBalance"
                label="Account Balance"
                onChange={props.onChange}
                name="accountBalance"
                value={props.account.accountBalance}
                error={props.errors.accountBalance}
            />

            <div className="form-group">
                <label htmlFor="accountType">Account Type</label>
                <div className="field">
                    <select
                        id="accountType"
                        name="accountType"
                        onChange={props.onChange}
                        value={props.account.accountType || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {accountTypes.map(accountType => {
                            return(
                                <option key={accountType.accountTypeID} value={accountType.accountType}>{accountType.accountType}</option>
                            );
                        })}
                    </select>
                </div>
                {props.errors.accountType && (
                    <div className="alert alert-danger">{props.errors.accountType}</div>
                )}
            </div>

            <TextInput
                id="interestRate"
                label="Interest Rate"
                onChange={props.onChange}
                name="interestRate"
                value={props.account.interestRate}
                error={props.errors.interestRate}
            />
            <div className="form-group">
                <label htmlFor="Customer">Customer</label>
                <div className="field">
                    <select
                        id="customer"
                        name="customer"
                        onChange={props.onChange}
                        value={props.account.customer || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {customers.map(customer => {
                            return(
                                <option key={customer.customerID} value={customer.customerID}>{customer.customerID}({customer.customerName})</option>
                            );
                        })}
                    </select>
                </div>
                {props.errors.customer && (
                    <div className="alert alert-danger">{props.errors.customer}</div>
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

export default AccountForm;
