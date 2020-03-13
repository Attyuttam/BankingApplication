import React from "react";
import TextInput from "./common/textInput";
//import PropTypes from "prop-types";

//TODO:
// 1. ensure that the account Type options are displayed from the DB
// 2. ensure there's a search option for customer which provides details from the DB

function AccountForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="accountBalance"
                label="Account Balance"
                onChange={props.onChange}
                name="accountBalance"
                value={props.account.accountBalance}
                error={props.errors.accountBalance}
            />

            <div className="form-group">
                <label htmlFor="author">Account Type</label>
                <div className="field">
                    <select
                        id="accountType"
                        name="accountType"
                        onChange={props.onChange}
                        value={props.account.accountType || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                        <option value="Deposit">Deposit</option>
                    </select>
                </div>
                {props.errors.accountType && (
                    <div className="alert alert-danger">{props.errors.accountType}</div>
                )}
            </div>

            <TextInput
                id="interestRate"
                label="Interest Rate"
                onChange={props.onChange}
                name="interestRate"
                value={props.account.interestRate}
                error={props.errors.interestRate}
            />
            <TextInput
                id="customer"
                label="Customer"
                onChange={props.onChange}
                name="customer"
                value={props.account.customer}
                error={props.errors.customer}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
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

export default AccountForm;
