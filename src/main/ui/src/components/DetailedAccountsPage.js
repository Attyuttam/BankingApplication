import React, { useState, useEffect } from "react";
import detailedAccountsStore from "../store/detailedAccountsStore";
import { loadDetailedAccounts } from "../actions/DetailedAccountActions";
import DetailedAccountsList from "./DetailedAccountsList";

function DetailedAccountsPage() {
    const [accounts, setAccounts] = useState(detailedAccountsStore.getDetailedAccounts());

    useEffect(() => {
        detailedAccountsStore.addChangeListener(onChange);
        if (detailedAccountsStore.getDetailedAccounts.length === 0) loadDetailedAccounts();
        return () => detailedAccountsStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    function onChange() {
        setAccounts(detailedAccountsStore.getDetailedAccounts());
    }

    return (
        <>
            <h2>Consolidated Account details</h2>
            <DetailedAccountsList accounts={accounts} />
        </>
    );
}

export default DetailedAccountsPage;
