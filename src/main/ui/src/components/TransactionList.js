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
            {props.transactions.map(transaction => {
                return (
                    <tr key={transaction.transactionID}>
                        <td>&nbsp;</td>
                        <td><Link to={"/manageTransaction/"+transaction.transactionID}>{transaction.transactionID}</Link></td>
                        <td>{transaction.transactionAmount}</td>
                        <td>{transaction.transactionTimeStamp}</td>
                        <td>{transaction.acaID}</td>
                        <td>{transaction.acaName}</td>
                        <td>{transaction.customerID}</td>
                        <td>{transaction.customerName}</td>
                        <td>{transaction.accountID}</td>
                        <td>{transaction.accountType}</td>
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
