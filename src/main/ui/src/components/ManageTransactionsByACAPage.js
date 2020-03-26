import React, {useEffect, useState} from "react";
import * as transactionActions from "../actions/transactionActions";
import transactionStore from "../store/transactionStore";
import {toast} from "react-toastify";
import TransactionsByACAForm from "./TransactionsByACAForm";
import TransactionList from "./TransactionList";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

//TODO:
// 1. need to add validation on form so that the date is in the format DD-MM-YYYY
// 2. need to auto generate the aca ID

const ManageTransactionsByACAPage = props => {
    const [errors, setErrors] = useState({});
    const [transactions,setTransactions] = useState(transactionStore.getTransactions());
    const [aca, setACA] = useState({
        acaID:""
    });
    useEffect(() => {
        transactionStore.addChangeListener(onChange);
        return () => transactionStore.removeChangeListener(onChange);
    }, [transactions.length]);
    function onChange() {
        setTransactions(transactionStore.getTransactions());
    }
    function handleChange({ target }) {
        setACA({
            ...aca,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};
        if (!aca.acaID) _errors.acaID = "ACA ID is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        transactionActions.loadTransactionsByACA(aca.acaID).then(() => {
            props.history.push("/manageTransactionsByACA");
            toast.success("Transactions displayed !");
        });
    }
    return (
        <>
            <h2>View Transactions By ACA</h2>
            <TransactionsByACAForm
                aca={aca}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
                <br/>
            <ReactHTMLTableToExcel
                id="transaction-table-xls-button"
                className="btn btn-primary"
                table="transactionTable"
                filename="TransactionByACA_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <TransactionList transactions={transactions} />
        </>
    );
};
export default ManageTransactionsByACAPage;