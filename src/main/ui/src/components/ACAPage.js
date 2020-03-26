import acaStore from '../store/acaStore';
import React, {useEffect, useState} from "react";
import {loadAcas} from "../actions/acaActions";
import ACAList from '../components/ACAList';
import {Link} from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function ACAPage() {
    const [acas, setAcas] = useState(acaStore.getAcas());
    useEffect(() => {
        acaStore.addChangeListener(onChange);
        if(acaStore.getAcas().length === 0)loadAcas();
        return () => acaStore.removeChangeListener(onChange);
    },[]);

    function onChange(){
        setAcas(acaStore.getAcas());
    }

    return(
        <>
            <h2>ACA Details</h2>
            <Link className="btn btn-primary" to="/manageACA">
                Add ACA
            </Link>
            &nbsp;
            <ReactHTMLTableToExcel
                id="aca-table-xls-button"
                className="btn btn-primary"
                table="acaTable"
                filename="ACA_Table"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            <ACAList acas = {acas}/>
        </>
    );
}
export default ACAPage;