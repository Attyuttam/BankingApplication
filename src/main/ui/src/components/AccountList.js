import React from "react";

function AccountList(props){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Account ID</th>
                    <th>Account balance</th>
                    <th>Interest rate</th>
                    <th>last access time</th>
                    <th>Account Type ID</th>
                    <th>Account Type</th>
                    <th>Customer</th>
                </tr>
            </thead>
            <tbody>
                {props.accounts.map(account => {
                    return(
                        <tr key={account.accountID}>
                            <td>&nbsp;</td>
                            <td>{account.accountID}</td>
                            <td>{account.accountBalance}</td>
                            <td>{account.interestRate}</td>
                            <td>{account.lastAccessTimeStamp}</td>
                            <td>{account.accountTypeID}</td>
                            <td>{account.accountType}</td>
                            <td>{account.customerName}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default AccountList;