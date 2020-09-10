import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {registerSuccess} from "../actions/register"
import {showLoader,hideLoader} from "../actions/Loader"
import {authTokenInsert,authFail,authTokenRemove,removeRegister,authLoaderStart,authLoaderOff} from "../actions/auth"
import history from "../../helpers/History"
import {Alert} from 'rsuite'



export const authStart=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.AUTH_START){
        let data=action.payload.data
        console.log("Login Data: ",data)
        dispatch(authLoaderStart())
        dispatch(postApiRequest('POST',API.LOGIN,null,actionTypes.AUTH_SUCCESS,actionTypes.AUTH_FAIL,data,null))
    }
}

export const isAuthSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.AUTH_SUCCESS){
        let data= action.payload
        if(data!=null && data.access){
            dispatch(authTokenInsert(data.access))
            dispatch(authApi('GET',API.PROFILE,null,actionTypes.FETCH_PROFILE_SUCCESS,actionTypes.FETCH_PROFILE_FAIL,null,data.access))
            history.push('/feed')
        }
    }
}

export const isFetchProfileSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_PROFILE_SUCCESS){
        let data=action.payload
        if(data!=null){
            dispatch(registerSuccess(data))
                history.push('/')
            Alert.success('Login Success!',2000)
        }
    }
}

export const isFetchProfileFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_PROFILE_FAIL){
        let data=action.payload
        if(data!=null){
            console.log("Profile fetch failed")
            dispatch(authLoaderOff())
        }
    }
}


export const isAuthFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.AUTH_FAIL){
        let data = action.payload
        if(data!=undefined){
            console.log("Auth Fail Data:" ,data)
            dispatch(authFail(data))
        }
        dispatch(authLoaderOff())
    }
}


export const authLogout=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.AUTH_TOKEN_REMOVE_START){
        dispatch(authTokenRemove())
        dispatch(removeRegister())
        history.push('/login')
    }
}



export const checkTokenVailid=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.CHECK_TOKEN_VAILID){
        let token=action.payload.token
        let tokenTime=new Date(action.payload.tokenTime)
        let currentTime=new Date()
        console.log("Token Time: ",tokenTime)
        console.log("Current Time: ",currentTime)
        if(!token){
            dispatch(authTokenRemove())
            dispatch(removeRegister())
        }
        else{
            if(tokenTime<=currentTime){
                dispatch(authTokenRemove())
                dispatch(removeRegister())
            }
        }

    }
}


export const authMdl=[authStart,isAuthSuccess,isAuthFail,isFetchProfileSuccess,isFetchProfileFail,authLogout,checkTokenVailid]