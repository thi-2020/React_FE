import * as actionTypes from "../actionTypes"




export const authStart=(data)=>({
    type:actionTypes.AUTH_START,
    payload:{data}
})

export const authSuccess=(data)=>({
    type:actionTypes.AUTH_UPDATE_SUCCESS,
    payload:{data}
})

export const authFail=(data)=>({
    type:actionTypes.AUTH_UPDATE_FAIL,
    payload:{data}
})

export const authLoaderStart=()=>({
    type:actionTypes.AUTH_LOADER_START
})

export const authLoaderOff=()=>({
    type:actionTypes.AUTH_LOADER_OFF
})

export const authTokenInsert=(token)=>({
    type:actionTypes.AUTH_TOKEN_INSERT,
    payload:{token}
})

export const authTokenRemove=()=>({
    type:actionTypes.AUTH_TOKEN_REMOVE
})


export const authTokenRemoveStart=()=>({
    type:actionTypes.AUTH_TOKEN_REMOVE_START
})

export const removeRegister=()=>({
    type:actionTypes.REMOVE_REGISTER_DATA
})

export const checkTokenVailid=(token,tokenTime)=>({
    type:actionTypes.CHECK_TOKEN_VAILID,
    payload:{token,tokenTime}
})