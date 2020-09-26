import * as actionTypes from "../actionTypes"


export const handleLike=(data)=>({
    type:actionTypes.LIKE_POST,
    payload:{data}
})


export const handleUnlike=(data)=>({
    type:actionTypes.UNLIKE_POST,
    payload:{data}
})


export const postLoaderStart=()=>({
    type:actionTypes.POST_LOADER_START
})

export const postLoaderOff=()=>({
    type:actionTypes.POST_LOADER_OFF
})


export const handleCreateComment=(data)=>({
    type:actionTypes.CREATE_COMMENT,
    payload:{data}
})

export const handleFetchComments=(data)=>({
    type:actionTypes.FETCH_COMMENTS,
    payload:{data}
})