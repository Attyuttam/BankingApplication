import React from "react";
import {Link} from "react-router-dom";

function CustomerList(props){
    return(
        <table className="table" id="customerTable">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Customer DOB</th>
                <th>Customer Guardian name</th>
                <th>Customer Father name</th>
                <th>Customer Mother name</th>
                <th>Customer Email</th>
            </tr>
            </thead>
            <tbody>
            {props.customers.map(customer => {
                return(
                    <tr key={customer.customerID}>
                        <td>&nbsp;</td>
                        <td>{customer.customerID}</td>
                        <td><Link to={"/manageCustomer/"+customer.customerID}>{customer.customerName}</Link></td>
                        <td>{customer.dob}</td>
                        <td>{customer.guardianName}</td>
                        <td>{customer.fatherName}</td>
                        <td>{customer.motherName}</td>
                        <td>{customer.emailId}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
export default CustomerList;