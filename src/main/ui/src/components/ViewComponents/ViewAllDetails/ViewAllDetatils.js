import React from "react";
import {NavLink} from "react-router-dom";

class ViewAllDetails extends React.Component {
    render() {
        return (
            <>
                <div style={{width:'100%',background:'#61dbfb ',paddingLeft: '5%',position:'fixed'}}>
                    <h1 >VIEW ALL DETAILS PAGE</h1>
                </div>
                <div style={{paddingLeft:'5%', paddingTop:'6%',paddingRight:'13%'}}>
                    <h2>Select the kind of view you want</h2>
                </div>
                <div style={{paddingLeft:'5%', paddingRight:'13%'}}>
                    <nav>
                        <ul>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewACADetails'}>View ACA details</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewAccountHolderDetails'}>View account holder details</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewAllAccountDetails'}>View all account details</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewConsolidatedViewPerCustomer'}>Consolidated view per customer</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewConsolidatedViewPerACA'}>Consolidated view per ACA</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewConsolidatedViewPerAccount'}>Consolidated view per account</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewAllTransactionsPerCustomer'}>View all transactions per customer</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewAllTransactionsPerACA'}>View all transactions per ACA</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewAllTransactionsPerAccount'}>View all transactions per account</NavLink></li>
                            <li><NavLink onClick={this.props.click} className={'link'} to={'viewAllTransactionsByDateRange'}>View all transactions by date range</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
}
export default ViewAllDetails;