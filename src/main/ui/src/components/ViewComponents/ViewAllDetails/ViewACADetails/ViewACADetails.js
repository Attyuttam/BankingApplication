import React from "react";

class ViewACADetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/aca')
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
                        <h1 >LIST OF ACAs</h1>
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
                                <th>ACA ID</th>
                                <th>ACA Name</th>
                                <th>ACA Birth Date</th>
                                <th>ACA Address</th>
                            </tr>

                            {this.state.data.map((item, index) => (
                                <tr key={index}>{
                                    <React.Fragment>
                                        <td>{index+1}</td>
                                        <td>{item.acaID}</td>
                                        <td>{item.acaName}</td>
                                        <td>{item.acaBirthDate}</td>
                                        <td>{item.acaAddress}</td>
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
export default ViewACADetails;