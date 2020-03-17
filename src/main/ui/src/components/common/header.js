import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav  className="navbar navbar-expand-sm bg-light">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/detailedAccounts">View all account details</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/acas">View ACAs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/accounts">View Accounts</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/transactions">View Transactions</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/customers">View Customers</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Header;
