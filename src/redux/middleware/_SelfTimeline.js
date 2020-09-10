import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {updateSelfTimelineSuccess,updateSelfTimelineFail,loaderStart,loaderFail} from "../actions/selfTimeline"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const fetchSelfTimeline=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SELF_TIMELINE){
        let onSuccess=actionTypes.SELF_TIMELINE_SUCCESS
        let onError=actionTypes.SELF_TIMELINE_FAIL
        dispatch(authApi('GET',API.SELF_TIMELINE,null,onSuccess,onError,null,null))
        dispatch(loaderStart())
    }
}

export const fetchSelfTimelineSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SELF_TIMELINE_SUCCESS){
        let data=action.payload;
        if(data){
            dispatch(updateSelfTimelineSuccess(data))
        }
        dispatch(loaderFail())
    }
}

export const fetchSelfTimelineFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SELF_TIMELINE_FAIL){
        let error=action.payload;
        if(error){
            dispatch(updateSelfTimelineFail(error))
        }
        dispatch(loaderFail())
    }
}




export const selfTimelineMdl=[fetchSelfTimeline,fetchSelfTimelineSuccess,fetchSelfTimelineFail]