import React, {useEffect, useState} from "react";
import * as transactionActions from "../actions/transactionActions";
import transactionStore from "../store/transactionStore";
import {toast} from "react-toastify";
import TransactionsInRangeForm from "./TransactionsInRangeForm";
import TransactionList from "./TransactionList";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

//TODO:
// 1. need to add validation on form so that the date is in the format DD-MM-YYYY
// 2. need to auto generate the aca ID

const ManageTransactionsInRangePage = props => {
    const [errors, setErrors] = useState({});
    const [transactions,setTransactions] = useState(transactionStore.getTransactions());
    const [range, setRange] = useState({
        startDate:"",
        endDate:""
    });
    useEffect(() => {
        transactionStore.addChangeListener(onChange);
        return () => transactionStore.removeChangeListener(onChange);
    }, [transactions.length]);
    function onChange() {
        setTransactions(transactionStore.getTransactions());
    }
    function handleChange({ target }) {
        setRange({
            ...range,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};
        if (!range.startDate) _errors.startDate = "Start date is required";
        if (!range.endDate) _errors.endDate = "End date is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        transactionActions.loadTransactionsByRange(range.startDate, range.endDate).then(() => {
            props.history.push("/manageTransactionsInRange");
            toast.success("Transactions displayed !");
        });
    }
    return (
        <>
            <h2>View Transactions within range</h2>
            <p style={{color: "red"}}>Please provide the start date and end date as same if you want to see all the transactions on a particular date</p>
            <TransactionsInRangeForm
                range={range}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
            <br/>
            <ReactHTMLTableToExcel
                id="transaction-table-xls-button"
                className="btn btn-primary"
                table="transactionTable"
                filename="TransactionInRange_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <TransactionList transactions={transactions} />
        </>
    );
};
export default ManageTransactionsInRangePage;