import React, { Component,useEffect,useState } from 'react'
import {RadioGroup,Radio} from "rsuite"
import { connect } from 'react-redux'
import * as action from "../../../redux/actions/connection"
import Followers from "./Followers"
import Following from "./Following"
import Connections from "./Connections"
export const Connection = (props) => {
    const {_connection,profile}=props
    const [option,setOption]=useState(1)
    useEffect(()=>{
        if(profile){
            _connection()
        }
    },[profile])

    const changeOption=(v)=>{
        setOption(v)
        console.log(v)
    }

    return (
        <div className="connection-page">
            <div className="container">
            <RadioGroup name="radioList" inline appearance="picker" defaultValue={option} size="lg" block onChange={(v)=>changeOption(v)} >
                <Radio value={1} >Followers</Radio>
                <Radio value={2} >Following</Radio>
                <Radio value={3} >Connections</Radio>
            </RadioGroup>

            <div>
               {option==1&&<Followers/>}
               {option==2&&<Following/>}
               {option==3&&<Connections/>}
            </div>
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
