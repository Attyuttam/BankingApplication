import React from "react";

function ACAList(props){
    return(
        <table className="table">
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
                return(
                    <tr key={aca.acaID}>
                        <td>
                           &nbsp;
                        </td>
                        <td>{aca.acaID}</td>
                        <td>{aca.acaName}</td>
                        <td>{aca.acaBirthDate}</td>
                        <td>{aca.acaAddress}</td>
                        <td>{aca.acaPhoneNum}</td>
                        <td>{aca.acaEmail}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
export default ACAList;