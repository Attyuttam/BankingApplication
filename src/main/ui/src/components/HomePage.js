import React from 'react';

function HomePage() {
    return (
        <div className='jumbotron'>
            <h2>Uttar Banga Kshetriya Gramin Bank</h2>
            <p>ACA administration software</p>
            <div className={'LandingPage-details'}>
                <img style={{paddingLeft: '42%'}} alt="UBKG LOGO" src={require('../resources/images/ubkg_logo.jpg')} />
                <br/>
                <p><strong>View all account details: </strong> All details of accounts transactions in a consolidated format is available here </p>
                <p><strong>View ACAs: </strong>This option will help you in viewing the ACA details and also create new ACAs and edit existing ACAs</p>
                <p><strong>View Accounts: </strong>This option will help you in viewing the Account details and also create new Accounts and edit existing Accounts</p>
                <p><strong>View Customers: </strong>This option will help you in viewing the Customer details and also create new Customers and edit existing Customers</p>
                <p><strong>View Transactions: </strong>This option will help you in viewing the Transactions details and you can filter the transaction details on the basis of account, ACA, Customer and date range and can also create new Transactions and edit existing Transactions</p>

            </div>
            <h4><a href="/about">About</a></h4>
        </div>);
}

export default HomePage;