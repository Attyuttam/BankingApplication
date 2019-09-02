import React from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import LandingPage from "./components/ViewComponents/LandingPage/LandingPage";
import EnterACADetails from "./components/ViewComponents/EnterACADetails/EnterACADetails";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ViewACADetails from "./components/ViewComponents/ViewACADetails/ViewACADetails";
import CreateAccountEntry from "./components/ViewComponents/CreateAccountEntry/CreateAccountEntry";
import EditAccountHolder from "./components/ViewComponents/EditAccountHolder/EditAccountHolder";
import EnterNewAccountHolder from "./components/ViewComponents/EnterNewAccountHolder/EnterNewAccountHolder";
import ViewWeeklyChart from "./components/ViewComponents/ViewWeeklyChart/ViewWeeklyChart";
import ViewMonthlyChart from "./components/ViewComponents/ViewMonthlyChart/ViewMonthlyChart";
import ViewYearlyChart from "./components/ViewComponents/ViewYearlyChart/ViewYearlyChart";
class App extends  React.Component{
    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () =>{
      this.setState({sideDrawerOpen: false});
    };
    render(){
        let backdrop;
        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <BrowserRouter>
                <div style={{height: '100%'}} className={'App'}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    <SideDrawer click={this.backdropClickHandler} show={this.state.sideDrawerOpen}/>
                    {backdrop}
                    <main style={{marginTop: '64px'}}>
                        <Switch>
                            <Route exact path='/' component={LandingPage}/>
                            <Route path='/enterACADetails' component={EnterACADetails}/>
                            <Route path='/viewACADetails' component={ViewACADetails}/>
                            <Route path='/createAccountEntry' component={CreateAccountEntry}/>
                            <Route path='/editAccountHolder' component={EditAccountHolder}/>
                            <Route path='/enterNewAccountHolder' component={EnterNewAccountHolder}/>
                            <Route path='/viewWeeklyChart' component={ViewWeeklyChart}/>
                            <Route path='/viewMonthlyChart' component={ViewMonthlyChart}/>
                            <Route path='/viewYearlyChart' component={ViewYearlyChart}/>
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
