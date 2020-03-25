import React from "react";
import TextInput from "./common/textInput";
//import PropTypes from "prop-types";

function ACAForm(props) {
    //console.log("ACA PROPS: "+JSON.stringify(props.aca));
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="acaName"
                label="ACA name"
                onChange={props.onChange}
                name="acaName"
                value={props.aca.acaName}
                error={props.errors.acaName}
            />
            <TextInput
                id="acaBirthDate"
                label="ACA DOB"
                type="date"
                onChange={props.onChange}
                name="acaBirthDate"
                value={props.aca.acaBirthDate}
                error={props.errors.acaBirthDate}
            />
            <TextInput
                id="acaPhoneNum"
                label="ACA phone number"
                onChange={props.onChange}
                name="acaPhoneNum"
                value={props.aca.acaPhoneNum}
                error={props.errors.acaPhoneNum}
            />
            <TextInput
                id="acaEmail"
                label="ACA email"
                onChange={props.onChange}
                name="acaEmail"
                value={props.aca.acaEmail}
                error={props.errors.acaEmail}
            />
            <TextInput
                id="acaAddress"
                label="ACA address"
                onChange={props.onChange}
                name="acaAddress"
                value={props.aca.acaAddress}
                error={props.errors.acaAddress}
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

export default ACAForm;
