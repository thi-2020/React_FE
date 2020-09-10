import * as actionTypes from "../actionTypes"



export const handleMutualFriend=(data)=>({
    type:actionTypes.FETCH_MUTUAL_FRIENDS,
    payload:{data}
})


export const handleSuccess=(data)=>({
    type:actionTypes.UPDATE_MUTUAL_FRIENDS_SUCCESS,
    payload:{data}
})



export const handleFail=(data)=>({
    type:actionTypes.UPDATE_MUTUAL_FRIENDS_FAIL,
    payload:{data}
})

export const loaderStart=()=>({
    type:actionTypes.FETCH_MUTUAL_FRIENDS_START
})


export const loaderFail=()=>({
    type:actionTypes.FETCH_MUTUAL_FRIENDS_OFF
})