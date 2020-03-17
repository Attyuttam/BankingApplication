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

    return (
        <>
            <h2 >Transaction details</h2>
            <Link className="btn btn-primary" to="/manageTransactions">
                View Transactions in range
            </Link>
            <TransactionList transactions={transactions} />
        </>
    );
}

export default TransactionPage;
