import React from "react";
import TextInput from "./common/textInput";
//import PropTypes from "prop-types";

function CustomerForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="customerName"
                label="Customer name"
                onChange={props.onChange}
                name="customerName"
                value={props.customer.customerName}
                error={props.errors.customerName}
            />
            <TextInput
                id="dob"
                label="Customer DOB"
                onChange={props.onChange}
                name="dob"
                value={props.customer.dob}
                error={props.errors.dob}
            />
            <TextInput
                id="guardianName"
                label="Customer Guardian Name"
                onChange={props.onChange}
                name="guardianName"
                value={props.customer.guardianName}
                error={props.errors.guardianName}
            />
            <TextInput
                id="fatherName"
                label="Customer Father Name"
                onChange={props.onChange}
                name="fatherName"
                value={props.customer.fatherName}
                error={props.errors.fatherName}
            />
            <TextInput
                id="motherName"
                label="Customer Mother Name"
                onChange={props.onChange}
                name="motherName"
                value={props.customer.motherName}
                error={props.errors.motherName}
            />
            <TextInput
                id="emailId"
                label="Customer Email ID"
                onChange={props.onChange}
                name="emailId"
                value={props.customer.emailId}
                error={props.errors.emailId}
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

export default CustomerForm;
