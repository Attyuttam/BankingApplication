import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import * as accountActions from "../actions/accountActions";
import AccountForm from "./AccountForm";
import accountStore from "../store/accountStore";

//TODO:
// 1. need to auto generate the lastAccessTimeStamp to the currentTimeStamp
// 2. need to auto generate the account ID
// 3. need to ensure that the accountType and customer are of object type.
// 4. need to create a DTO object which takes in these details, like savings account, customer ID and sends their ID to
//    the back end where their corresponding objects are found and saved accordingly
// 5. ensure that the account Type options are displayed from the DB (repeated in Account Form)
// 6. ensure that the customer options are displayed from the DB (repeated in Account Form)
// 7. ensure there's a search option for customer which provides details from the DB (repeated in Account Form)

//TODO:
// NOTE: There are essentially two ways in which we can solve this sending the object from form problem:
//      1. since we will be sending the list of available account types as well as the customers from the backend,
//          we can use whatever selected and add that to the sending JSON (will have to find how to do that)
//      2. make a sender DTO in which we will be sending the savings Type ID and customer ID respectively(on select),
//          and at the back end, we will find the savings type object and customer object corresponding to the sent
//          savings type and customer object respectively and save the account object. (sounds a bit lengthier but do able)
const ManageAccountsPage = props => {
    const [accounts,setAccounts] = useState({});
    const [errors,setErrors] = useState({});
    const [account, setAccount] =useState({
        accountBalance: "",
        accountType: "",
        interestRate: "",
        customer: ""
    });
    useEffect(() => {
        accountStore.addChangeListener(onChange);
        return () => {accountStore.removeChangeListener(onChange);}
    }, [accounts.length]);

    function onChange() {
        setAccounts(accountStore.getAccounts());
    }
    function handleChange({target}){
        setAccount({
            ...account,
            [target.name]: target.value
        });
    }
    function formIsValid(){
        const _errors = {};
        if (!account.accountBalance) _errors.accountBalance = "Account balance is required";
        if (!account.accountType) _errors.accountType = "Account type is required";
        if (!account.interestRate) _errors.interestRate = "Interest rate is required";
        if (!account.customer) _errors.customer = "Customer is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        accountActions.saveAccount(account).then(() => {
            props.history.push("/accounts");
            toast.success("Account saved.");
        });
    }
    return (
        <>
            <h2>Add Account</h2>
            <AccountForm
                account={account}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
        </>
    );
};
export default ManageAccountsPage;