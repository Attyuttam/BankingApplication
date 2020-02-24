import React from "react";
import './LandingPage.css';
const LandingPage = props => (
    <div className={'LandingPage'}>
        <img alt="UBKG LOGO" src={require('./ubkg_logo.jpg')} />
        <h1>WELCOME TO THE UBKG BANKING APPLICATION</h1>
        <div className={'LandingPage-details'}>
            <p><strong>Enter ACA Details:</strong> Using this you can add details of a new ACA </p>
            <p><strong>View ACA Details:</strong>This option will help you in viewing the ACA details </p>
            <p><strong>Edit ACA Details:</strong>The details of any ACA can be edited using this option</p>
            <p><strong>Enter new Account Holder:</strong>You can add the details of a new account holder using this option</p>
            <p><strong>Edit Account Holder:</strong>The details of any of the account holders can be edited using this option</p>
            <p><strong>Create Account Entry:</strong>An entry into the account of any of the account holders at any particular date can be made using this option</p>
            <p><strong>View Weekly Chart:</strong>This option helps us in viewing the weekly chart. It also has the option of generating an excel sheet for the weekly chart</p>
            <p><strong>View Monthly Chart:</strong>This option helps us in viewing the monthly chart. It also has the option of generating an excel sheet for the monthly chart</p>
            <p><strong>View Yearly Chart:</strong>This option helps us in viewing the yearly chart. It also has the option of generating an excel sheet for the yearly chart</p>
        </div>
    </div>
);
export default LandingPage;
