import * as actionTypes from "../actionTypes"


export const invitationStart=(data,token)=>({
    type:actionTypes.SEND_INVITATION_START,
    payload:{data,token}
})


export const updateInvitationSuccess=(data)=>({
    type:actionTypes.UPDATE_INVITATION_SUCCESS_DATA,
    payload:{data}
})

export const updateInvitationFail=(data)=>({
    type:actionTypes.UPDATE_INVITATION_FAIL_DATA,
    payload:{data}
})

export const  invitationLoaderStart=()=>({
    type:actionTypes.INVITATION_LOADER_START
})

export const  invitationLoaderOff=()=>({
    type:actionTypes.INVITATION_LOADER_OFF
})


export  const checkNoOfInvitationLeft=(token)=>({
    type:actionTypes.CHECK_INVITATION_START,
    payload:{token}
})

export const checkNoOfInvitationUpdate=(data)=>({
    type:actionTypes.CHECK_INVITATION_UPDATE_SUCCESS,
    payload:{data}
})