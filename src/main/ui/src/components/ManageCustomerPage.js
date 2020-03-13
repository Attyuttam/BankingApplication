import React, {useEffect, useState} from "react";
import customerStore from "../store/customerStore";
import * as customerActions from "../actions/customerActions";
import {toast} from "react-toastify";
import CustomerForm from "./CustomerForm";

const ManageCustomerPage = props => {
    const [customers, setCustomers] = useState({});
    const [errors, setErrors] = useState({});
    const [customer, setCustomer] = useState({
        customerName: "",
        dob: "",
        guardianName: "",
        fatherName: "",
        motherName: "",
        emailId: ""
    });
    useEffect(() => {
        customerStore.addChangeListener(onChange);
        return () => customerStore.removeChangeListener(onChange);
    }, [customers.length]);

    function onChange() {
        setCustomers(customerStore.getCustomers());
    }

    function handleChange({target}) {
        setCustomer({
            ...customer,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};
        if (!customer.customerName) _errors.customerName = "Customer name is required";
        if (!customer.dob) _errors.dob = "Date of birth is required";
        if (!customer.guardianName) _errors.guardianName = "Guardian name is required";
        if (!customer.fatherName) _errors.fatherName = "Father name is required";
        if (!customer.motherName) _errors.motherName = "Mother name is required";
        if (!customer.emailId) _errors.emailId = "Email ID is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        customerActions.saveCustomer(customer).then(() => {
            props.history.push("/customers");
            toast.success("Customer saved.");
        });
    }

    return (
        <>
            <h2>Add Customer</h2>
            <CustomerForm
                customer={customer}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
        </>
    );
};
export default ManageCustomerPage;