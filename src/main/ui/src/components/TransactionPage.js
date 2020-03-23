import React, { useState, useEffect } from "react";
import detailedAccountsStore from "../store/detailedAccountsStore";
import { loadDetailedAccounts } from "../actions/DetailedAccountActions";
import TransactionList from '../components/TransactionList';
import {Link} from "react-router-dom";

function TransactionPage() {
    const [transactions, setTransactions] = useState(detailedAccountsStore.getDetailedAccounts());

    useEffect(() => {
        detailedAccountsStore.addChangeListener(onChange);
        if (detailedAccountsStore.getDetailedAccounts.length === 0) loadDetailedAccounts();
        return () => detailedAccountsStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    function onChange() {
        setTransactions(detailedAccountsStore.getDetailedAccounts());
    }

    /*const buttonStyle = {
        position: "relative",
        paddingLeft: "105px"
    };*/
    return (
        <>
            <h2 >Transaction details</h2>
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
            <TransactionList transactions={transactions} />
        </>
    );
}

export default TransactionPage;
