import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {store} from "../store/index"
import {updateFriendRequestSuccess,frLoaderStart,frLoaderOff} from "../actions/friendRequest"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const fetchFriendRequest=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_FREIND_REQUEST){
        const state=store.getState()
        const token=state.AuthReducer.token
        let onSuccess=actionTypes.FETCH_FREIND_REQUEST_SUCCESS
        let onError=actionTypes.FETCH_FREIND_REQUEST_FAIL
        if(token){
            dispatch(authApi('GET',API.FRIEND_REQUEST,null,onSuccess,onError,null,token))
        }
    }
}



export const fetchFriendRequestSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_FREIND_REQUEST_SUCCESS){       
        let data=action.payload
        if(data){
            console.log("Friend Request: ",data)
            dispatch(updateFriendRequestSuccess(data))
        }
    }
}



export const fetchFriendRequestFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_FREIND_REQUEST_FAIL){
        let data=action.payload
        if(data){
            console.warn("Friend Request Error: ",data)
        }
    }
}


export const handleFriendRequest=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.HANDLE_FRIEND_REQUEST){
        const state=store.getState()
        const token=state.AuthReducer.token
        let data=action.payload.data
        let onSuccess=actionTypes.HANDLE_FR_SUCCESS
        let onError=actionTypes.HANDLE_FR_FAIL
        dispatch(authApi('POST',API.HANDLE_FR,null,onSuccess,onError,data,token))
        dispatch(frLoaderStart())

    }
}

export const handlefrSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.HANDLE_FR_SUCCESS){
        dispatch({type:actionTypes.FETCH_FREIND_REQUEST})
        dispatch(frLoaderOff())
    }

}


export const handlefrFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.HANDLE_FR_FAIL){
        let error=action.payload
        console.warn("Handle Friend Request Failed: ",error)
        dispatch(frLoaderOff())

    }
}



export const sendFriendRequest=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SEND_FRIEND_REQUEST){
        const state=store.getState()
        const token=state.AuthReducer.token
        let data =action.payload.data
        let onSuccess=actionTypes.SEND_FRIEND_REQUEST_SUCCESS
        let onError=actionTypes.SEND_FRIEND_REQUEST_FAIL
        dispatch(authApi('POST',API.SEND_FR,null,onSuccess,onError,data,token))
        dispatch(frLoaderStart())

    }
}


export const sendFriendRequestSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SEND_FRIEND_REQUEST_SUCCESS){
        let data=action.payload
        console.log("Send Friend Request: ",data)
        dispatch(frLoaderOff())
    }
}

export const sendFriendRequestFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SEND_FRIEND_REQUEST_FAIL){
        let error=action.payload
        console.warn("Send Friend Request Fail: ",error)
        dispatch(frLoaderOff())
    }
}


export const frndReqMdl=[fetchFriendRequest,fetchFriendRequestSuccess,fetchFriendRequestFail,
    handleFriendRequest,handlefrSuccess,handlefrFail,sendFriendRequest,sendFriendRequestFail,sendFriendRequestSuccess
]