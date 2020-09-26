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
import * as action from "./redux/actions/auth"



function AppMobile(props) {
  const { isAuthenticated ,_checkValidAuth} = props

  useEffect(()=>{
    _checkValidAuth()
  },[])
  
  
    return (
        <div className="App-Mobile">
           {isAuthenticated&&<HeaderTab />}
            <Suspense>
                <Router history={history} >
          <Switch>
            {_AuthenticatedPages.map((item,index)=>{
              if(item.isMobile==true){
                return(
                  <PrivateRoute
                  component={item.view}
                  exact
                  path={item.pageLink}
                  layout={item.layout}
                  key={index}
                  />
                )
              }
            
            })}

          {_PublicPages.map((item,index)=>{
            return(
                <Route
                component={item.view}
                exact
                path={item.pageLink}
                key={index}
                />
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

const mapDispatchToProps=dispatch=>{
  return{
    _checkValidAuth:()=>dispatch(action.checkTokenVailid())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMobile);
