import React from 'react'
import {images} from "../../../constant"
import {Button,Input,HelpBlock,Message} from "rsuite"
import {reduxForm,Field} from "redux-form"
import {connect} from "react-redux"
import * as action from "../../../redux/actions/auth"
import {Footer} from "../../index"
import {Link} from "react-router-dom"
import {isMobile} from "react-device-detect"
const {logo}=images


const renderInput=(props)=>{
    return(
        <div className="render-input">
        <Input {...props.input} size={props.size} placeholder={props.placeholder} name={props.name}
                 type={props.type}  value={props.value} disabled={props.disabled} />
            <p>{props.meta.touched?props.meta.error:""}</p>
        </div>
    )
}

const onSubmit=(values)=>{
  
    // props._Register(values)
}


let Login=(props)=> {
    const {handleSubmit,_Login,loading,error}=props

    const authentication=(value)=>{
        console.log("Login data: ",value)
        _Login(value)
    }

    return (
        <div className="login-page">
    <div className="login-container">
            <div className="row">
               {!isMobile&& <div className="col-md-3"></div>}
                <div className="col-md-6 col-sm-12">
                <div className="container">
                <div className="logo-container" >
                    <img src={logo.logof} className="logo" />
                </div>
                <div className="header-container">
                    <h3>Welcome Back</h3>
                    <h6>Don't miss your next opportunity. Sign in to stay updated on your professional world.</h6>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit(authentication)} >
                        <div className="input-container">
                            <Field name="username"  placeholder="Email" component={renderInput} size="lg" type="text"/>
                        </div>
                        <div className="input-container">
                            <Field name="password" placeholder="Password" component={renderInput} size="lg" type="password" />
                        </div>
                       {error!=null&& <Message
                         showIcon
                         type="error"
                        title="Login Error"
                        description={error.detail}
                        />}
                        <div className="button-container">
                            <Button type="submit" appearance="primary" block size="lg" loading={loading} >Sign In </Button>
                        </div>

                    </form>
                    <div className="forget-container">
                    <Button  appearance="subtle"  size="lg" >Forgot Password?</Button>    
                    </div>
                    <div className="join-now">
                        <h5>New to Mateor?</h5>
                        <Link to="/signup">
                        <h5 className="join-now-btn">Join Now</h5>    
                        </Link>
                    </div>
                </div>
            </div>

                </div>
               {!isMobile&& <div className="col-md-3"></div>}
            </div>
       
        </div>
        {/* <Footer/> */}

        </div>
    
    )
}


const mapStateToProps=(state)=>{
    return{
        loading:state.AuthReducer.loading,
        error:state.AuthReducer.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
       _Login:(data)=>dispatch(action.authStart(data)) 
    }
}


Login=connect(mapStateToProps,mapDispatchToProps)(Login)


export default reduxForm({
    form:'Login-Form',
    onSubmit
})(Login)