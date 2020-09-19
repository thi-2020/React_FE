import React, { Component,useEffect } from 'react'
import {RadioGroup,Radio} from "rsuite"
import { connect } from 'react-redux'
import * as action from "../../../redux/actions/connection"
export const Connection = (props) => {
    const {_connection,profile}=props

    useEffect(()=>{
        if(profile){
            _connection()
        }
    },[profile])

    return (
        <div className="connection-page">
            <div className="container">
            <RadioGroup name="radioList" inline appearance="picker" defaultValue="followers" size="lg" block >
                <Radio value="followers" >Followers</Radio>
                <Radio value="following" >Following</Radio>
                <Radio value="connection" >Connections</Radio>
            </RadioGroup>
            </div>
           
        </div>
    )
}

const mapStateToProps = (state) => ({
    connection:state.ConnectionReducer.connections,
    followers:state.ConnectionReducer.followers,
    following:state.ConnectionReducer.following,
    profile:state.ProfileReducer.data
})

const mapDispatchToProps =dispatch=> {
    return{
        _connection:()=>dispatch(action.getConnections())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection)
