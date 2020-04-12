import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import loginStore from "../../store/loginStore";
import * as loginActions from "../../actions/loginActions";
import AuthenticationService from "../../services/AuthenticationService";

function Header(props) {
    const [userLoggedIn, setUserLoggedIn] = useState(loginStore.getUserLogged());

    useEffect(() => {
        loginStore.addChangeListener(onChange);
        return () => {
            loginStore.removeChangeListener(onChange);
        }
    }, []);
    function onChange(){
        setUserLoggedIn(loginStore.getUserLogged());
    }
    const activeStyle = {color: "orange"};
    //const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log("LOGGED IN STATUS: "+userLoggedIn);

    function logout() {
        AuthenticationService.logout();
        loginActions.login_logout();
    }

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} exact to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/detailedAccounts">View all account
                        details</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/acas">View ACAs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/accounts">View Accounts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/transactions">View
                        Transactions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/customers">View Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    {!userLoggedIn && <NavLink className="nav-link" to="/login">Login</NavLink>}
                    {userLoggedIn &&
                    <NavLink className="nav-link" to="/logout" onClick={logout()}>Logout</NavLink>}
                </li>
            </ul>
        </nav>
    );
}

export default Header;
