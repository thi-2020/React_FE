import React, { useEffect, useState } from 'react'
import { images } from "../../../constant"
import { Button, Input, DatePicker, InputGroup } from "rsuite"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import { Footer } from "../../index"
import moment from "moment"
import * as action from "../../../redux/actions/register"
const { logo } = images



const renderInput = (props) => {
    return (
        <div className="render-input">
            <Input {...props.input} size={props.size} placeholder={props.placeholder} name={props.name}
                type={props.type} value={props.value} disabled={props.disabled} />
            <p className="error"> {props.meta.touched ? props.meta.error : ""}</p>
        </div>
    )
}

const renderDatePicker = (props) => {
    return (
        <div className="render-input">
            <DatePicker {...props.input} size={props.size} placeholder={props.placeholder} name={props.name}
                type={props.type} value={props.value} disabled={props.disabled} placement={props.placement} block={props.block}
            />
        </div>
    )
}


const renderMobileNumber = (props) => {
    return (
        <div className="render-input">
            <InputGroup>
                <InputGroup.Addon>
                    +91
      </InputGroup.Addon>
                <Input {...props.input} size={props.size} placeholder={props.placeholder} name={props.name}
                    type={props.type} value={props.value} disabled={props.disabled} />

            </InputGroup>
            <p className="error"> {props.meta.touched ? props.meta.error : ""}</p>

        </div>

    )
}


//-----------------Vailidation---------------------------------
const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const password = value =>
    value && !/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/.test(value)
        ? 'The Password must contain at least 1 digit 1 Uppercase and 1 speical character.'
        : undefined

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

        const number = value =>
        value && isNaN(Number(value)) ? 'Must be a number' : undefined

        export const minLength = min => value =>
        value && value.length < min ? `Must be Valid Indian Mobile Number.` : undefined
      export const minLength2 = minLength(10)


const onSubmit = (values) => {
    console.log("SignUp data: ", values)
    // props._Register(values)
}


let Register = (props) => {

    const { handleSubmit, loading, _register, valid } = props
    const [key, setKey] = useState(null)


    const authentication = (value) => {
        console.log("Login data: ", value)
        let data = value;
        let date = moment().format('YYYY-MM-DD')
        data.dob = date
        data.key = key
        console.log("Signup Data: ", data)
        _register(data)
    }


    const getParams = (url) => {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        setKey(params.key)
        console.log("Extracted Params: ", params)
        return params;
    };

    useEffect(() => {
        getParams(window.location.href)
    }, [])


    return (
        <div className="register-page">
            <div className="register-container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="register-box">
                            <div className="logo-container">
                                <img src={logo.logof} className="reg-logo" />
                            </div>
                            <div>
                                <h3>Make the most of your professional life.</h3>
                            </div>
                            <div className="register-form">
                                <form onSubmit={handleSubmit(authentication)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field component={renderInput} placeholder="First Name" name="first_name" size="lg" type="text" validate={required} />
                                        </div>
                                        <div className="col-md-6">
                                            <Field component={renderInput} placeholder="Last Name" name="last_name" size="lg" type="text" validate={required} />
                                        </div>
                                    </div>
                                    <div className="input-container">
                                        <Field component={renderInput} placeholder="Username" name="username" size="lg" type="text" validate={required} />
                                    </div>
                                    <div className="input-container">
                                        <Field component={renderInput} placeholder="Email" name="email" size="lg" type="email" validate={[required, email]} />
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-12">
                                            <Field component={renderMobileNumber} placeholder="Phone Number" name="phone" size="lg" type="text"
                                             validate={[number,required,minLength2,]} />
                                        </div>
                                        <div className="col-md-12">
                                            <Field component={renderDatePicker} placeholder="Date of Birth"
                                                name="dob" size="lg" type="date" placement="bottom" block validate={required} />
                                        </div>
                                    </div>
                                    <div className="input-container">
                                        <Field component={renderInput} placeholder="Password" name="password" size="lg" type="password"
                                            validate={[required, password]} />
                                    </div>
                                    <div className="button-container">
                                        <Button appearance="primary" size="lg" type="submit" disabled={!valid} loading={loading} block >Create Account</Button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>

            {/* <Footer/> */}
        </div>
    )
}












const mapStateToProps = (state) => {
    return {
        loading: state.RegisterReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _register: (data) => dispatch(action.registerStart(data))
    }
}


Register = connect(mapStateToProps, mapDispatchToProps)(Register)


export default reduxForm({
    form: 'Register-Form',
    onSubmit
})(Register)