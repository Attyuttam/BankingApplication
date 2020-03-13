import React from "react";
import {Link} from "react-router-dom";
//import PropTypes from "prop-types";

function TransactionList(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Transaction ID</th>
                <th>Transaction amount</th>
                <th>Transaction time</th>
                <th>Aca ID</th>
                <th>Aca name</th>
                <th>Customer Id</th>
                <th>Customer name</th>
                <th>Account ID</th>
                <th>Account Type</th>
            </tr>
            </thead>
            <tbody>
            {props.accounts.map(account => {
                return (
                    <tr key={account.transactionID}>
                        <td>&nbsp;</td>
                        <td>{account.transactionID}</td>
                        <td>{account.transactionAmount}</td>
                        <td>{account.transactionTimeStamp}</td>
                        <td>{account.acaID}</td>
                        <td>{account.acaName}</td>
                        <td>{account.customerID}</td>
                        <td>{account.customerName}</td>
                        <td>{account.accountID}</td>
                        <td>{account.accountType}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

/*DetailedAccountsList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};*/

export default TransactionList;
