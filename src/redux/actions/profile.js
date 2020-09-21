import * as actionTypes from "../actionTypes"



export const fetchProfile=(data)=>({
    type:actionTypes.FETCH_PROFILE,
    payload:{data}
})


export const updateProfileSuccess=(data)=>({
    type:actionTypes.UPDATE_FETCH_PROFILE_SUCCESS,
    payload:{data}
})



export const updateProfileFail=(data)=>({
    type:actionTypes.UPDATE_FETCH_PROFILE_FAIL,
    payload:{data}
})

export const loaderStart=()=>({
    type:actionTypes.FETCH_PROFILE_START
})


export const loaderFail=()=>({
    type:actionTypes.FETCH_PROFILE_OFF
})


export const changeProfile=(data,option)=>({
    type:actionTypes.CHANGE_PROFILE,
    payload:{data,option}
})


export const deletePhoto=(data)=>({
    type:actionTypes.DELETE_PROFILE_PHOTO,
    payload:{data}
})
