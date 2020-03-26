import React, {useEffect, useState} from "react";
import TextInput from "./common/textInput";
import acaStore from "../store/acaStore";
import {loadCustomers} from "../actions/customerActions";
import {loadAcas} from "../actions/acaActions";
//import PropTypes from "prop-types";

function TransactionsByACAForm(props) {
    const [acas, setAcas] = useState(acaStore.getAcas());

    useEffect(() => {
        acaStore.addChangeListener(onChange);
        if(acaStore.getAcas().length === 0)loadAcas();
        return () => {acaStore.removeChangeListener(onChange);}
    },[]);

    function onChange(){
        setAcas(acaStore.getAcas());
    }
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="ACA">ACA</label>
                <div className="field">
                    <select
                        id="acaID"
                        name="acaID"
                        onChange={props.onChange}
                        value={props.aca.acaID || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {acas.map(aca => {
                            return(
                                <option key={aca.acaID} value={aca.acaID}>{aca.acaID}({aca.acaName})</option>
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

export default TransactionsByACAForm;
