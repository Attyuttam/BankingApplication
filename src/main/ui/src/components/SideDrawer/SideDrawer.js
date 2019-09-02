import React from "react";
import './SideDrawer.css';
import {NavLink} from "react-router-dom";
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <div>
            <nav className={drawerClasses}>
                <ul>
                    <li><NavLink onClick = {props.click} className={'link'} to={'enterACADetails'}>Enter ACA details</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'viewACADetails'}>View ACA details</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'enterNewAccountHolder'}>Enter new Account Holder</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'editAccountHolder'}>Edit Account Holder</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'createAccountEntry'}>Create Account Entry</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'viewWeeklyChart'}>View Weekly Chart</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'viewMonthlyChart'}>View Monthly Chart</NavLink></li>
                    <li><NavLink onClick = {props.click} className={'link'} to={'viewYearlyChart'}>View Yearly Chart</NavLink></li>
                </ul>
            </nav>
        </div>);
};
export  default SideDrawer;