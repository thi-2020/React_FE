import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {updateInvitationSuccess,updateInvitationFail,invitationLoaderOff,invitationLoaderStart,checkNoOfInvitationUpdate} from "../actions/invite"
import history from "../../helpers/History"
import {Alert} from 'rsuite'



export const invitationStart=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.SEND_INVITATION_START){
        dispatch(invitationLoaderStart())
        let data=action.payload.data
        let token=action.payload.token
        dispatch(authApi('POST',API.SEND_INVITATION,null,actionTypes.SEND_INVITATION_SUCCESS,actionTypes.SEND_INVITATION_FAIL,data,token))
    }
}


export const invitationSuccess=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.SEND_INVITATION_SUCCESS){
        let data=action.payload
        dispatch(updateInvitationSuccess(data))
        dispatch(invitationLoaderOff())
    }
}


export const checkInvitationLeft=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.CHECK_INVITATION_START){
        let token= action.payload.token

        dispatch(authApi('GET',API.INVITATION_LEFT,null,actionTypes.CHECK_INVITATION_SUCCESS,actionTypes.CHECK_INVITATION_FAIL,null,token))
        
    }
}


export const checkInvitationSuccess=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.CHECK_INVITATION_SUCCESS){
        let data=action.payload
        if(data){
            dispatch(checkNoOfInvitationUpdate(data.data.invitation_left))
        }
    }
}



export const invitationMdl=[invitationStart,invitationSuccess,checkInvitationLeft,checkInvitationSuccess]