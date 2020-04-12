import React from "react";
import {Link} from "react-router-dom";

function ACAList(props) {
    return (
        <>
            <table className="table" id="acaTable">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ACA ID</th>
                    <th>ACA Name</th>
                    <th>ACA DOB</th>
                    <th>ACA Address</th>
                    <th>ACA Phone num</th>
                    <th>ACA Email</th>
                </tr>
                </thead>
                <tbody>
                {props.acas.map(aca => {
                    return (
                        <tr key={aca.acaID}>
                            <td>
                                &nbsp;
                            </td>
                            <td>{aca.acaID}</td>
                            <td><Link to={"/manageACA/" + aca.acaID}>{aca.acaName}</Link></td>
                            <td>{aca.acaBirthDate}</td>
                            <td>{aca.acaAddress}</td>
                            <td>{aca.acaPhoneNum}</td>
                            <td>{aca.acaEmail}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default ACAList;