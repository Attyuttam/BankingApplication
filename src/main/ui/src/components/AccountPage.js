import React, {useEffect, useState} from "react";
import accountStore from '../store/accountStore';
import AccountList from '../components/AccountList';
import {loadAccounts} from "../actions/accountActions";
import {Link} from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

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
        //console.log("HIT HERE");
        setAccounts(accountStore.getAccounts());
    }
    return(
        <>
            <h2>Account Details</h2>
            <p style={{color: "red"}}>Please click on the Account ID to edit that Account</p>
            <Link className="btn btn-primary" to="/manageAccount">
                Add Account
            </Link>
            &nbsp;
            <ReactHTMLTableToExcel
                id="account-table-xls-button"
                className="btn btn-primary"
                table="accountTable"
                filename="Account_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <AccountList accounts={accounts}/>
        </>
    );
}
export default AccountPage;