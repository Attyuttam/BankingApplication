import React, {useEffect, useState} from "react";
import TextInput from "./common/textInput";
import customerStore from "../store/customerStore";
import {loadCustomers} from "../actions/customerActions";
//import PropTypes from "prop-types";

function TransactionsByCustomerForm(props) {
    const [customers, setCustomers] = useState(customerStore.getCustomers());

    useEffect(() => {
        customerStore.addChangeListener(onChange);
        if(customerStore.getCustomers().length === 0)loadCustomers();
        return () => {customerStore.removeChangeListener(onChange);}
    },[]);

    function onChange(){
        setCustomers(customerStore.getCustomers());
    }
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="Customer">Customer</label>
                <div className="field">
                    <select
                        id="customerID"
                        name="customerID"
                        onChange={props.onChange}
                        value={props.customer.customerID || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {customers.map(customer => {
                            return(
                                <option key={customer.customerID} value={customer.customerID}>{customer.customerID}({customer.customerName})</option>
                            );
                        })}
                    </select>
                </div>
                {props.errors.customerID && (
                    <div className="alert alert-danger">{props.errors.customerID}</div>
                )}
            </div>

            <input type="submit" value="View" className="btn btn-primary" />
        </form>
    );
}

/*
CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
*/
TextInput.defaultProps = {
    error: ""
};

export default TransactionsByCustomerForm;
