import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"
import moment from "moment"
const initialState={
    loading:false,
    data:null,
    error:null,
    isAuthenticated:false,
    token:null,
    tokenTime:null
}



const authLoaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}

const authLoaderOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}


const authSuccess=(action,state)=>{
    return updateObject(state,{
        data:action.payload.data,
        error:null,

    })
}

const authFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const authTokenInsert=(action,state)=>{
    return updateObject(state,{
        token:action.payload.token,
        isAuthenticated:true,
        error:null,
        tokenTime:new Date(new Date().getTime() + 3600*1000)
    })
}

const authTokenRemove=(action,state)=>{
    return updateObject(state,{
        token:null,
        isAuthenticated:false,
        data:null,
        tokenTime:null
    })
}





const AuthReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.AUTH_LOADER_START:return authLoaderStart(action,state);
        case actionTypes.AUTH_LOADER_OFF:return authLoaderOff(action,state);
        case actionTypes.AUTH_UPDATE_SUCCESS:return authSuccess(action,state);
        case actionTypes.AUTH_UPDATE_FAIL:return authFail(action,state);
        case actionTypes.AUTH_TOKEN_INSERT:return authTokenInsert(action,state);
        case actionTypes.AUTH_TOKEN_REMOVE:return authTokenRemove(action,state)

        default:
            return state
    }
}



export default AuthReducer