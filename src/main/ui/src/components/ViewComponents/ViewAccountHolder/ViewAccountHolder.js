import React from "react";

class ViewAccountHolder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/accounts')
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
                <div style={{paddingLeft: '20%', paddingTop:'3%'}}>
                    <h1>LIST OF ALL ACCOUNT HOLDERS AND ACCOUNTS</h1>
                </div>
                <div style={{paddingLeft: '13%', paddingTop:'2%'}}>
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
                            <th>Account Id</th>
                            <th>Account Holder</th>
                            <th>Account Type</th>
                            <th>Account Balance</th>
                            <th>Interest Rate</th>
                            <th>Last Access Time</th>
                        </tr>

                        {this.state.data.map((item, index) => (
                            <tr key={index}>{
                                <React.Fragment>
                                    <td>{item.accountID}</td>
                                    <td>TODO</td>
                                    <td>TODO</td>
                                    <td>{item.accountBalance}</td>
                                    <td>{item.interestRate}</td>
                                    <td>{item.lastAccessTimeStamp}</td>
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
export default ViewAccountHolder;