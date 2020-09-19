import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {Route,Redirect} from "react-router-dom"
import history from "../../helpers/History"
import PropTypes from 'prop-types'
import {store} from "../../redux/store/index"


function PrivateRoute({layout:Layout, component:Component ,props, ...rest}) {


  const state=store.getState()
  const isAuthenticated=state.AuthReducer.isAuthenticated
    // const {isAuthenticated,component}=props
    useEffect(()=>{
      console.log("Private Route: ",props)
    },[])
    return (
        <Route
        {...rest}   
        render={props=>isAuthenticated?(
          <Layout >
        <Component {...props}  />
        </Layout>
        )
         :(<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
      }
        />
    )
}


PrivateRoute.propTypes={
    component:PropTypes.any.isRequired,
    layout:PropTypes.any.isRequired,
    path:PropTypes.any.isRequired,
}




// const mapStateToProps=state=>{
//     return{
//       isAuthenticated:state.AuthReducer.isAuthenticated
//     }
//   }
  
//   export default connect(mapStateToProps,null)(PrivateRoute);

export default PrivateRoute