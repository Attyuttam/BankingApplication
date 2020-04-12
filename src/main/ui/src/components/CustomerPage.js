import React, {useEffect, useState} from "react";
import customerStore from "../store/customerStore";
import {loadCustomers} from "../actions/customerActions";
import CustomerList from "./CustomerList";
import {Link} from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function CustomerPage(){
    const [customers, setCustomers] = useState(customerStore.getCustomers());

    useEffect(() => {
        customerStore.addChangeListener(onChange);
        if (customerStore.getCustomers.length === 0) loadCustomers();
        return () => customerStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    function onChange() {
        setCustomers(customerStore.getCustomers());
    }

    return (
        <>
            <h2 >Customer details</h2>
            <p style={{color: "red"}}>Please click on the Customer name to edit that Customer</p>
            <Link className="btn btn-primary" to="/manageCustomer">
                Add Customer
            </Link>
            &nbsp;
            <ReactHTMLTableToExcel
                id="customer-table-xls-button"
                className="btn btn-primary"
                table="customerTable"
                filename="Customer_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <CustomerList customers={customers} />
        </>
    );
}
export default CustomerPage;