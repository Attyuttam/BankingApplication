import React, { useState, useEffect } from "react";
import detailedAccountsStore from "../store/detailedAccountsStore";
import { loadDetailedAccounts } from "../actions/DetailedAccountActions";
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';

function TransactionPage() {
    const [range,setRange] = useState({
        startDate:"",
        endDate:""
    });
    const [errors, setErrors] = useState({});
    const [accounts, setAccounts] = useState(detailedAccountsStore.getDetailedAccounts());

    useEffect(() => {
        detailedAccountsStore.addChangeListener(onChange);
        if (detailedAccountsStore.getDetailedAccounts.length === 0) loadDetailedAccounts();
        return () => detailedAccountsStore.removeChangeListener(onChange); // cleanup on unmount
    }, [accounts.length]);

    function onChange() {
        setAccounts(detailedAccountsStore.getDetailedAccounts());
    }

    return (
        <>
            <h2 >Transaction details</h2>
            <TransactionForm range={range}/>
            <TransactionList accounts={accounts} />
        </>
    );
}

export default TransactionPage;
