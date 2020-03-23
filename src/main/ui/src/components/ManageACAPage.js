import React, {useEffect, useState} from "react";
import * as acaActions from "../actions/acaActions";
import acaStore from "../store/acaStore";
import {toast} from "react-toastify";
import ACAForm from "./ACAForm";

//TODO:
// 1. need to add validation on form so that the date is in the format DD-MM-YYYY (DONE)
// 2. need to auto generate the aca ID (DONE)

const ManageACAPage = props => {
    const [errors, setErrors] = useState({});
    const [acas,setAcas] = useState({});
    const [aca, setAca] = useState({
        acaName:"",
        acaBirthDate:"",
        acaAddress:"",
        acaPhoneNum:"",
        acaEmail:""
    });
    useEffect(() => {
        acaStore.addChangeListener(onChange);
        return () => acaStore.removeChangeListener(onChange);
    }, [acas.length]);
    function onChange() {
        setAcas(acaStore.getAcas());
    }
    function handleChange({ target }) {
        setAca({
            ...aca,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};
        if (!aca.acaName) _errors.acaName = "ACA name is required";
        if (!aca.acaBirthDate) _errors.acaBirthDate = "ACA birth date is required";
        if (!aca.acaAddress) _errors.acaAddress = "ACA address is required";
        if (!aca.acaEmail) _errors.acaEmail = "ACA email is required";
        if (!aca.acaPhoneNum) _errors.acaPhoneNum = "ACA phone number is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        acaActions.saveACA(aca).then(() => {
            props.history.push("/acas");
            toast.success("ACA saved.");
        });
    }
    return (
        <>
            <h2>Add ACA</h2>
            <ACAForm
                aca={aca}
                errors = {errors}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
        </>
    );
};
export default ManageACAPage;