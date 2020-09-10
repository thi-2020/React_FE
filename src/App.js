import React, { Suspense, useEffect } from 'react';
import 'rsuite/lib/styles/index.less';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute"
import { Router, Route, Switch, useLocation, Redirect } from "react-router-dom";
import { Header, FooterTab, HeaderTab } from "./components/index"
import history from "./helpers/History"
import { isMobile } from "react-device-detect"
import { connect } from "react-redux"
import { _AuthenticatedPages, _PublicPages } from "./Routes/pages"
import {RouteLayout,MainLayoutDesktop} from "./components/Layout"
const App = (props) => {
  // let location=useLocation()
  const { isAuthenticated } = props





  return (
    <>
    <div className="App" style={{ marginTop: isAuthenticated && isMobile ? 50 : 0 }} >
      {!isMobile && isAuthenticated && <Header pages={_PublicPages} />}
      {isMobile && isAuthenticated && <HeaderTab />}
      <Suspense fallback={<div />} >
        <Router history={history} >
          <Switch>
            {!isAuthenticated && _PublicPages.map((page, index) => {
              if(page.isMobile==false){
                return (
                  <Route path={page.pageLink} exact render={({ match }) => <page.view />} key={index} />
                )
              }
             
            })}
            {_AuthenticatedPages.map((page, index) => {
              if(page.isMobile==false){
                if(page.pageLink!=='/profile'){
                  return (
                    <RouteLayout
                    component={page.view}
                    exact
                    path={page.pageLink}
                    key={index}
                    layout={MainLayoutDesktop}
                    />
                  )
                }
                else{
                  return(
                    <PrivateRoute path={page.pageLink} exact component={page.view} key={index} />
                  )

                }            
              }
             
            })}
          </Switch>
        </Router>
        {isMobile && isAuthenticated && <FooterTab />}
      </Suspense>
    </div>
    </>
  );
}



const mapStateToProps = state => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);
