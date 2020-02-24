import React from "react";

class ViewAccountHolderDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/customers')
            .then(response => response.json())
            .then((dataReceived) =>{
                this.setState({
                    data: dataReceived
                });
            });
    }

    render() {
        if(this.state.data !== null ) {
            return (
                <div>
                <div style={{width:'100%',background:'#61dbfb ',paddingLeft: '5%',position:'fixed'}}>
                    <h1 >LIST OF ALL ACCOUNT HOLDERS AND ACCOUNTS</h1>
                </div>
                <div style={{paddingLeft:'5%', paddingTop:'10%',paddingRight:'13%'}}>
                    <style>{`
                        table,th,td{
                            border:1px solid black;
                            border-collapse: collapse;
                        }
                        th,td{
                            padding: 20px; 
                            background-color:none;
                        }
                    `}</style>
                    <table>
                        <tbody>
                        <tr>
                            <th>Sl no.</th>
                            <th>customerID</th>
                            <th>customerName</th>
                            <th>customerEmailID</th>
                            <th>customerGuardianName</th>
                            <th>customerAccountID</th>
                            <th>customerAccountBalance</th>
                            <th>customerAccountLastAccessTimeStamp</th>
                            <th>customerAccountType</th>
                            <th>customerAccountCreationTimeStamp</th>
                        </tr>

                        {this.state.data.map((item, index) => (
                            <tr key={index}>{
                                <React.Fragment>
                                    <td>{index+1}</td>
                                    <td>{item.customerID}</td>
                                    <td>{item.customerName}</td>
                                    <td>{item.emailId}</td>
                                    <td>{item.guardianName}</td>
                                    <td>{item.customerAccountID}</td>
                                    <td>{item.customerAccountBalance}</td>
                                    <td>{item.customerAccountLastAccessTimeStamp}</td>
                                    <td>{item.customerAccountType}</td>
                                    <td>{item.customerAccountCreationTimeStamp}</td>
                                </React.Fragment>
                            }
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
                </div>);
        }
    }
}
export default ViewAccountHolderDetails;