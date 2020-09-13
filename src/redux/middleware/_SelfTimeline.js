import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {updateSelfTimelineSuccess,updateSelfTimelineFail,loaderStart,
    loaderFail,updateSelfTimelineIntersection, 
} from "../actions/selfTimeline"
import history from "../../helpers/History"
import {Alert} from 'rsuite'
import {store} from "../store/index"

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


export const selfTimeLineIntersection=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SELF_TIMELINE_INTERSECTION){
        const state=store.getState()
        const data=state.SelfTimelineReducer.data;
        if(data!=null && data.data.next!=null){
            let api = data.data.next
            let onSuccess=actionTypes.SELF_TIMELINE_INTERSECTION_SUCCESS;
            let onFail=actionTypes.SELF_TIMELINE_INTERSECTION_FAIL
            dispatch(authApi('GET',api,null,onSuccess,onFail,null,null))
            dispatch(loaderStart())
        }
      
    }
}

export const selfTimeLineIntersectionSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SELF_TIMELINE_INTERSECTION_SUCCESS){
        let data=action.payload
        if(data){
            const state=store.getState()
            const timeline=state.SelfTimelineReducer.data;
            let result=timeline.data.results;
            timeline.data.results.push(...data.data.results)
            timeline.data.count=data.data.count;
            timeline.data.next=data.data.next;
            timeline.data.previous=data.data.previous
            dispatch(updateSelfTimelineIntersection(timeline))
        }
        dispatch(loaderFail())
    }
}

export const selfTimeLineIntersectionFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SELF_TIMELINE_INTERSECTION_FAIL){
        let data=action.payload
        // if(data){
        //     updateSelfTimelineIntersection(data)
        // }
        dispatch(loaderFail())
    }
}


export const selfTimelineMdl=[
    fetchSelfTimeline,
    fetchSelfTimelineSuccess,
    fetchSelfTimelineFail,
    selfTimeLineIntersection,
    selfTimeLineIntersectionSuccess,
    selfTimeLineIntersectionFail
]