import React, {useEffect, useState} from "react";
import accountStore from '../store/accountStore';
import AccountList from '../components/AccountList';
import {loadAccounts} from "../actions/accountActions";
import {Link} from "react-router-dom";

function AccountPage(){
    const [accounts,setAccounts] = useState(accountStore.getAccounts());

    useEffect(() => {
        accountStore.addChangeListener(onChange);
        if(accountStore.getAccounts().length === 0) loadAccounts();
        return () => {
            accountStore.removeChangeListener(onChange);
        }

    },[]);

    function onChange(){
        console.log("HIT HERE");
        setAccounts(accountStore.getAccounts());
    }
    return(
        <>
            <h2>Account Details</h2>
            <Link className="btn btn-primary" to="/manageAccount">
                Add Account
            </Link>
            <AccountList accounts={accounts}/>
        </>
    );
}
export default AccountPage;