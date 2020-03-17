import React from "react";
import TextInput from "./common/textInput";
//import PropTypes from "prop-types";

function TransactionForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="startDate"
                label="Start date"
                onChange={props.onChange}
                name="startDate"
                value={props.range.startDate}
                error={props.errors.startDate}
            />
            <TextInput
                id="endDate"
                label="End date"
                onChange={props.onChange}
                name="endDate"
                value={props.range.endDate}
                error={props.errors.endDate}
            />
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

export default TransactionForm;
