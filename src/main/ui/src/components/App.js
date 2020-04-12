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
import ManageTransactionsInRangePage from "./ManageTransactionsInRangePage";
import ManageTransactionsByCustomerPage from "./ManageTransactionsByCustomerPage";
import ManageTransactionsByACAPage from "./ManageTransactionsByACAPage";
import ManageTransactionsByAccountPage from "./ManageTransactionsByAccountPage";
import ManageTransactionsPage from "./ManageTransactionsPage";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticationService from "../services/AuthenticationService";

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/login" exact component={LoginComponent} />
                <AuthenticatedRoute path="/" exact component={HomePage} />
                <AuthenticatedRoute path="/home" exact component={HomePage} />
                <AuthenticatedRoute path="/about" component={AboutPage} />
                <AuthenticatedRoute path="/detailedAccounts" component={DetailedAccountsPage} />
                <AuthenticatedRoute path="/acas" component={ACAPage}/>
                <AuthenticatedRoute path="/customers" component={CustomerPage}/>
                <AuthenticatedRoute path="/accounts" component={AccountPage}/>
                <AuthenticatedRoute path="/transactions" component={TransactionPage}/>
                <AuthenticatedRoute path="/manageTransaction/:slug" component={ManageTransactionsPage}/>
                <AuthenticatedRoute path="/manageTransaction" component={ManageTransactionsPage}/>
                <AuthenticatedRoute path="/manageACA/:slug" component={ManageACAPage} />
                <AuthenticatedRoute path="/manageACA" component={ManageACAPage}/>
                <AuthenticatedRoute path="/manageAccount/:slug" component={ManageAccountsPage}/>
                <AuthenticatedRoute path="/manageAccount" component={ManageAccountsPage}/>
                <AuthenticatedRoute path="/manageCustomer/:slug" component={ManageCustomerPage}/>
                <AuthenticatedRoute path="/manageCustomer" component={ManageCustomerPage}/>
                <AuthenticatedRoute path="/manageTransactionsInRange" component={ManageTransactionsInRangePage}/>
                <AuthenticatedRoute path="/manageTransactionsByCustomer" component={ManageTransactionsByCustomerPage}/>
                <AuthenticatedRoute path="/manageTransactionsByACA" component={ManageTransactionsByACAPage}/>
                <AuthenticatedRoute path="/manageTransactionsByAccount" component={ManageTransactionsByAccountPage}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
