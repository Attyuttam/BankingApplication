import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import DetailedAccountsPage from "./DetailedAccountsPage";
import Header from "./common/header";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ACAPage from "./ACAPage";
import AccountPage from "./AccountPage";
import TransactionPage from "./TransactionPage";
import ManageACAPage from "./ManageACAPage";
import ManageAccountsPage from "./ManageAccountsPage";
import CustomerPage from "./CustomerPage";
import ManageCustomerPage from "./ManageCustomerPage";

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/detailedAccounts" component={DetailedAccountsPage} />
                <Route path="/acas" component={ACAPage}/>
                <Route path="/customers" component={CustomerPage}/>
                <Route path="/accounts" component={AccountPage}/>
                <Route path="/transactions" component={TransactionPage}/>
                <Route path="/manageACA" component={ManageACAPage}/>
                <Route path="/manageAccount" component={ManageAccountsPage}/>
                <Route path="/manageCustomer" component={ManageCustomerPage}/>
                <Redirect from="/about-page" to="about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
