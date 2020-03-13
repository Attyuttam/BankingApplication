import React, {useEffect, useState} from "react";
import customerStore from "../store/customerStore";
import {loadCustomers} from "../actions/customerActions";
import CustomerList from "./CustomerList";
import {Link} from "react-router-dom";

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
            <Link className="btn btn-primary" to="/manageCustomer">
                Add Customer
            </Link>
            <CustomerList customers={customers} />
        </>
    );
}
export default CustomerPage;