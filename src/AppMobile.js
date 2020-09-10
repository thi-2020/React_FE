import React, { Suspense, useEffect } from 'react';
import 'rsuite/lib/styles/index.less';
// import './App.css';
import './AppMobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute"
import { Router, Route, Switch, useLocation, Redirect } from "react-router-dom";
import { Header, FooterTab, HeaderTab } from "./components/index"
import history from "./helpers/History"
import { connect } from "react-redux"
import { _AuthenticatedPages, _PublicPages } from "./Routes/pages"



function AppMobile(props) {
    const { isAuthenticated } = props

    return (
        <div className="App-Mobile">
           {isAuthenticated&&<HeaderTab />}
            <Suspense>
                <Router history={history} >
                    <Switch>
                        {!isAuthenticated && _PublicPages.map((page, index) => {
                            return (
                                <Route path={page.pageLink} exact render={({ match }) => <page.view />} key={index} />
                            )
                        })}
                        {_AuthenticatedPages.map((page, index) => {
                            return (
                                <PrivateRoute path={page.pageLink} exact component={page.view} key={index} />
                            )
                        })}
                    </Switch>
                </Router>

            </Suspense>

           {isAuthenticated&& <FooterTab />}
        </div>
    )
}








const mapStateToProps = state => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(AppMobile);
