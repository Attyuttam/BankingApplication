import React, {useEffect, useState} from "react";
import * as transactionActions from "../actions/transactionActions";
import transactionStore from "../store/transactionStore";
import {toast} from "react-toastify";
import TransactionsByAccountForm from "./TransactionsByAccountForm";
import TransactionList from "./TransactionList";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

//TODO:
// 1. need to add validation on form so that the date is in the format DD-MM-YYYY
// 2. need to auto generate the aca ID

const ManageTransactionsByAccountPage = props => {
    const [errors, setErrors] = useState({});
    const [transactions,setTransactions] = useState(transactionStore.getTransactions());
    const [account, setAccount] = useState({
        accountID:""
    });
    useEffect(() => {
        transactionStore.addChangeListener(onChange);
        return () => transactionStore.removeChangeListener(onChange);
    }, [transactions.length]);
    function onChange() {
        setTransactions(transactionStore.getTransactions());
    }
    function handleChange({ target }) {
        setAccount({
            ...account,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};
        if (!account.accountID) _errors.accountID = "Account ID is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        transactionActions.loadTransactionsByAccount(account.accountID).then(() => {
            props.history.push("/manageTransactionsByAccount");
            toast.success("Transactions displayed !");
        });
    }
    return (
        <>
            <h2>View Transactions By Account</h2>
            <TransactionsByAccountForm
                account={account}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
            <br/>
            <ReactHTMLTableToExcel
                id="transaction-table-xls-button"
                className="btn btn-primary"
                table="transactionTable"
                filename="TransactionByAccount_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <TransactionList transactions={transactions} />
        </>
    );
};
export default ManageTransactionsByAccountPage;