import * as actionTypes from "../actionTypes"



export const handleVisibility=(data)=>({
    type:actionTypes.GET_VISIBILITY_OPTIONS,
})


export const updateVisibilitySuccess=(data)=>({
    type:actionTypes.UPDATE_GET_VISIBILITY_OPTIONS_SUCCESS,
    payload:{data}
})



export const updateVisibilityFail=(data)=>({
    type:actionTypes.UPDATE_GET_VISIBILITY_OPTIONS_FAIL,
    payload:{data}
})

export const loaderStart=()=>({
    type:actionTypes
})


export const loaderFail=()=>({
    type:actionTypes
})


export const changeVisibility=(data)=>({
    type:actionTypes.CHANGE_VISIBILITY_OPTION,
    payload:{data}
})

export const changeVisibilitySuccess=(data)=>({
    type:actionTypes.UPDATE_V_O_SUCCESS,
    payload:{data}
})

export const settingLoaderStart=()=>({
    type:actionTypes.SETTING_START
})

export const settingLoaderOff=()=>({
    type:actionTypes.SETTING_OFF
})

