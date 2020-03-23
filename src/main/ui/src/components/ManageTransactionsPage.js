import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import transactionStore from  "../store/transactionStore";
import * as transactionActions from "../actions/transactionActions";
import TransactionForm from "./TransactionForm";

const ManageTransactionsPage = props => {
    const [transactions,setTransactions] = useState({});
    const [errors,setErrors] = useState({});
    const [transaction, setTransaction] =useState({
        transactionAmount: "",
        account: "",
        aca: ""
    });
    useEffect(() => {
        transactionStore.addChangeListener(onChange);
        return () => {transactionStore.removeChangeListener(onChange);}
    }, [transactions.length]);

    function onChange() {
        setTransactions(transactionStore.getTransactions());
    }
    function handleChange({target}){
        setTransaction({
            ...transaction,
            [target.name]: target.value
        });
    }
    function formIsValid(){
        const _errors = {};
        if (!transaction.transactionAmount) _errors.transactionAmount = "Transaction amount is required";
        if (!transaction.account) _errors.account = "Account is required";
        if (!transaction.aca) _errors.aca = "ACA is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        transactionActions.saveTransaction(transaction).then(() => {
            props.history.push("/transactions");
            toast.success("Transaction saved.");
        });
    }
    return (
        <>
            <h2>Add Transaction</h2>
            <TransactionForm
                transaction={transaction}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
        </>
    );
};
export default ManageTransactionsPage;