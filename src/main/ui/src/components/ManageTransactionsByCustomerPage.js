import React, {useEffect, useState} from "react";
import * as transactionActions from "../actions/transactionActions";
import transactionStore from "../store/transactionStore";
import {toast} from "react-toastify";
import TransactionsByCustomerForm from "./TransactionsByCustomerForm";
import TransactionList from "./TransactionList";

//TODO:
// 1. need to add validation on form so that the date is in the format DD-MM-YYYY
// 2. need to auto generate the aca ID

const ManageTransactionsByCustomerPage = props => {
    const [errors, setErrors] = useState({});
    const [transactions,setTransactions] = useState(transactionStore.getTransactions());
    const [customer, setCustomer] = useState({
        customerID:""
    });
    useEffect(() => {
        transactionStore.addChangeListener(onChange);
        return () => transactionStore.removeChangeListener(onChange);
    }, [transactions.length]);
    function onChange() {
        setTransactions(transactionStore.getTransactions());
    }
    function handleChange({ target }) {
        setCustomer({
            ...customer,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};
        if (!customer.customerID) _errors.customerID = "Customer ID is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        transactionActions.loadTransactionsByCustomer(customer.customerID).then(() => {
            props.history.push("/manageTransactionsByCustomer");
            toast.success("Transactions displayed !");
        });
    }
    return (
        <>
            <h2>View Transactions By Customer</h2>
            <TransactionsByCustomerForm
                customer={customer}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
            <TransactionList transactions={transactions} />
        </>
    );
};
export default ManageTransactionsByCustomerPage;