import React from "react";
import {Link} from "react-router-dom";
//import PropTypes from "prop-types";

function DetailedAccountsList(props) {
  return (
    <table className="table" id="detailedAccountsTable">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Aca ID</th>
                <th>Aca name</th>
                <th>Aca birthdate</th>
                <th>Aca phone number</th>
                <th>Aca email</th>
                <th>Aca address</th>
                <th>Customer Id</th>
                <th>Customer name</th>
                <th>Customer dob</th>
                <th>Customer email id</th>
                <th>Customer Guardian name</th>
                <th>Customer Father name</th>
                <th>Customer Mother name</th>
                <th>Account ID</th>
                <th>Account balance</th>
                <th>Interest rate</th>
                <th>last access time</th>
                <th>Account Type ID</th>
                <th>Account Type</th>
                <th>Transaction ID</th>
                <th>Transaction amount</th>
                <th>Transaction time</th>
            </tr>
        </thead>
      <tbody>
        {props.accounts.map(account => {
          return (
            <tr key={account.accountID}>
                <td>&nbsp;</td>
                <td>{account.acaID}</td>
                <td>{account.acaName}</td>
                <td>{account.acaBirthDate}</td>
                <td>{account.acaPhoneNum}</td>
                <td>{account.acaEmail}</td>
                <td>{account.acaAddress}</td>
                <td>{account.customerID}</td>
                <td>{account.customerName}</td>
                <td>{account.customerDob}</td>
                <td>{account.customerEmailId}</td>
                <td>{account.customerGuardianName}</td>
                <td>{account.customerFatherName}</td>
                <td>{account.customerMotherName}</td>
                <td>{account.accountID}</td>
                <td>{account.accountBalance}</td>
                <td>{account.interestRate}</td>
                <td>{account.lastAccessTimeStamp}</td>
                <td>{account.accountTypeID}</td>
                <td>{account.accountType}</td>
                <td>{account.transactionID}</td>
                <td>{account.transactionAmount}</td>
                <td>{account.transactionTimeStamp}</td>
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

export default DetailedAccountsList;
