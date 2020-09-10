import * as actionTypes from "../actionTypes"

export const searchLoaderStart=()=>({
    type:actionTypes.SEARCH_LOADER_START
})

export const searchLoaderOff=()=>({
    type:actionTypes.SEARCH_LOADER_OFF
})


export const globalSearch=(data)=>({
    type:actionTypes.GLOBAL_SEARCH,
    payload:{data}
})


export const globalSearchUpdateSuccess=(data)=>({
    type:actionTypes.GLOBAL_SEARCH_UPDATE_SUCCESS,
    payload:{data}
})


export const globalSearchUpdateFail=(data)=>({
    type:actionTypes.GLOBAL_SEARCH_UPDATE_FAIL,
    payload:{data}
})