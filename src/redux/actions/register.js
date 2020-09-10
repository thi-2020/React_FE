import * as actionTypes from "../actionTypes"


export const registerStart=(data)=>({
    type:actionTypes.UI_REGISTER_START,
    payload:{data}
})

export const registerSuccess=(data)=>({
    type:actionTypes.REGISTER_UPDATE_SUCCESS,
    payload:{data}
})

export const registerFail=(error)=>({
    type:actionTypes.REGISTER_UPDATE_FAIL,
    payload:{error}
})


export const registerLoaderStart=()=>({
    type:actionTypes.REGISTER_LOADER_START
})

export const registerLoaderOff=()=>({
    type:actionTypes.REGISTER_LOADER_OFF
})