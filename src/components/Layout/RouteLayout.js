import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux"

const RouteLayout=(props)=> {
    const{layout:Layout,component:Component,...rest}=props;   
    useEffect(()=>{
    console.log("In Feed: ",props)
    })
    return (
        <Route
        {...rest}
        render={matchProps=>
            // props.isAuthenticated?
            (
            <Layout>
                <Component {...matchProps}  />
            </Layout>)
        // ):
        // (<Redirect to={{pathname: '/login', state: { from: props.location } }} />)
        // }    
            }    
        />
    )
}
// RouteLayout.propTypes={
//     component:PropTypes.any.isRequired,
//     layout:PropTypes.any.isRequired,
//     path:PropTypes.any.isRequired,
// }


const mapStateToProps=state=>{
    return{
      isAuthenticated:state.AuthReducer.isAuthenticated
    }
  }
  
export default connect(mapStateToProps,null)(RouteLayout);