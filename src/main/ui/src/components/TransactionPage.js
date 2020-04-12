import React, { useState, useEffect } from "react";
import detailedAccountsStore from "../store/detailedAccountsStore";
import { loadDetailedAccounts } from "../actions/DetailedAccountActions";
import TransactionList from '../components/TransactionList';
import {Link} from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function TransactionPage() {
    const [transactions, setTransactions] = useState(detailedAccountsStore.getDetailedAccounts());
    //console.log(transactions);
    useEffect(() => {
        //log("HIT HERE"+transactions);
        detailedAccountsStore.addChangeListener(onChange);
        if (detailedAccountsStore.getDetailedAccounts.length === 0) {loadDetailedAccounts();}
        return () => detailedAccountsStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    function onChange() {
        //console.log("HIT IN ON CHANGE"+transactions);
        setTransactions(detailedAccountsStore.getDetailedAccounts());
    }

    /*const buttonStyle = {
        position: "relative",
        paddingLeft: "105px"
    };*/
    return (
        <>
            <h2 >Transaction details</h2>
            <p style={{color: "red"}}>Please click on the Transaction ID to edit that Transaction</p>
            <Link  className="btn btn-primary" to="/manageTransactionsInRange">
                View Transactions in range
            </Link>
            &nbsp;
            <Link  className="btn btn-primary" to="/manageTransactionsByACA">
                View Transactions by ACA
            </Link>
            &nbsp;
            <Link  className="btn btn-primary" to="/manageTransactionsByCustomer">
                View Transactions by Customer
            </Link>
            &nbsp;
            <Link  className="btn btn-primary" to="/manageTransactionsByAccount">
                View Transactions by Account
            </Link>
            &nbsp;
            <Link  className="btn btn-primary" to="/manageTransaction">
                Add Transaction
            </Link>
            &nbsp;
            <ReactHTMLTableToExcel
                id="transaction-table-xls-button"
                className="btn btn-primary"
                table="transactionTable"
                filename="AllTransactions_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <TransactionList transactions={transactions} />
        </>
    );
}

export default TransactionPage;
