import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {Route,Redirect} from "react-router-dom"
import history from "../../helpers/History"

function PrivateRoute({ component: Component,isAuthenticated, ...rest }) {
    // const {isAuthenticated,component}=props
    useEffect(()=>{
      console.log("Private Route: ",isAuthenticated)
    },[])
    return (
        <Route
        {...rest}   
        render={props=>isAuthenticated?(<Component {...props}  />)
         :(<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
      }
        />
    )
}






const mapStateToProps=state=>{
    return{
      isAuthenticated:state.AuthReducer.isAuthenticated
    }
  }
  
  export default connect(mapStateToProps,null)(PrivateRoute);