import acaStore from '../store/acaStore';
import React, {useEffect, useState} from "react";
import {loadAcas} from "../actions/acaActions";
import ACAList from '../components/ACAList';
import {Link} from "react-router-dom";

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
            <ACAList acas = {acas}/>
        </>
    );
}
export default ACAPage;