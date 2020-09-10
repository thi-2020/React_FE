import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {updateProfileSuccess,updateProfileFail,loaderStart,loaderFail} from "../actions/profile"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const fetchProfile=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_PROFILE){

        let onSuccess=  actionTypes.FETCH_PROFILE_SUCCESS;
        let onError=    actionTypes.FETCH_PROFILE_FAIL
        dispatch(authApi('GET',API.PROFILE,null,onSuccess,onError,null,null))
        dispatch(loaderStart())
    }
}

export const fetchProfileSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_PROFILE_SUCCESS){
        let data=action.payload
        if(data.success){
            dispatch(updateProfileSuccess(data.data))
        }
        dispatch(loaderFail())
    }
}

export const fetchProfileFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_PROFILE_FAIL){
        let error=action.payload
        if(error){
            dispatch(updateProfileFail(error))
        }
        dispatch(loaderFail())
    }
}




export const profileMdl=[fetchProfile,fetchProfileSuccess,fetchProfileFail]