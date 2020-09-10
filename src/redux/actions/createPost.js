import * as actionTypes from "../actionTypes"



export const handleCreatePost=(data)=>({
    type:actionTypes.CREATE_POST,
    payload:{data}
})


export const updateCreatePostSuccess=(data)=>({
    type:actionTypes.UPDATE_CREATE_POST_SUCCESS,
    payload:{data}
})



export const updateCreatePostFail=(data)=>({
    type:actionTypes.UPDATE_CREATE_POST_FAIL,
    payload:{data}
})

export const loaderStart=()=>({
    type:actionTypes.CREATE_POST_START
})


export const loaderFail=()=>({
    type:actionTypes.CREATE_POST_OFF
})