import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    followers:null,
    connections:null,
    following:null,
    error:null
}



const updateFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const updateFollowersSuccess=(action,state)=>{
    return updateObject(state,{
        followers:action.payload.data
    })
}
const updateFollowingSuccess=(action,state)=>{
    return updateObject(state,{
        following:action.payload.data
    })
}

const updateConnectionSuccess=(action,state)=>{
    return updateObject(state,{
        connections:action.payload.data
    })
}

const LoaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}
const LoaderOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}



const ConnectionReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_FOLLOWERS_SUCCESS:return updateFollowersSuccess(action,state);
        case actionTypes.UPDATE_FOLLOWING_SUCCESS:return updateFollowingSuccess(action,state);
        case actionTypes.UPDATE_CONNECTION_SUCCESS:return updateConnectionSuccess(action,state);
        case actionTypes.UPDATE_CONNECTION_SUCCESS:return LoaderStart(action,state)
        case actionTypes.GET_CONNECTION_START:return LoaderStart(action,state)
        case actionTypes.GET_CONNECTION_OFF:return LoaderOff(action,state)

        default:
            return state
    }
}



export default ConnectionReducer