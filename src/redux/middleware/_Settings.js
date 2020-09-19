import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {updateVisibilitySuccess,updateVisibilityFail,changeVisibilitySuccess,settingLoaderOff,settingLoaderStart} from "../actions/settings"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const handleVisibility=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_VISIBILITY_OPTIONS){
        let onSuccess=actionTypes.GET_VISIBILITY_OPTIONS_SUCCESS;
        let onError=actionTypes.GET_VISIBILITY_OPTIONS_FAIL
     
        dispatch(authApi('GET',API.VISIBILITY_SETTING,null,onSuccess,onError,null,null))
    }
}

export const handleVisibilitySuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_VISIBILITY_OPTIONS_SUCCESS){
        let data= action.payload
        let onSuccess=actionTypes.GET_VS_SUCCESS;
        let onError=actionTypes.GET_VS_FAIL;
        dispatch(authApi('GET',API.GET_VISIBILITY_SELECTED,null,onSuccess,onError,null,null))

        if(data){
            dispatch(updateVisibilitySuccess(data.data))
        }
    }
}

export const handleVisibilityFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_VISIBILITY_OPTIONS_FAIL){
        let error = action.payload;
        if(error){
            dispatch(updateVisibilityFail(error))
        }
    }
}


export const getVSSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_VS_SUCCESS){
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_VS_SUCCESS,
                      payload:data  
            })
        }
    }
}



export const changeVisibility=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CHANGE_VISIBILITY_OPTION){
        let data=action.payload.data;
        let onSuccess=actionTypes.CHANGE_VISIBILITY_OPTION_SUCCESS;
        let onError=actionTypes.CHANGE_VISIBILITY_OPTION_FAIL;
        dispatch(authApi('POST',API.UPDATE_VISIBILITY,null,onSuccess,onError,data,null))
        dispatch(settingLoaderStart())
    }
}

export const cvSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CHANGE_VISIBILITY_OPTION_SUCCESS){
        let data= action.payload
        if(data){
            dispatch(changeVisibilitySuccess(data))
            Alert.success("Settings Changed Successfuly!",1000)
        }
        dispatch(settingLoaderOff())
    }
}

export const cvFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CHANGE_VISIBILITY_OPTION_FAIL){
        Alert.error("Something Went Wrong!",300)
        dispatch(settingLoaderOff())
    }
}



export const settingsMdl=[handleVisibility,
    handleVisibilitySuccess,
    handleVisibilityFail,
    changeVisibility,
    cvSuccess,
    getVSSuccess
]