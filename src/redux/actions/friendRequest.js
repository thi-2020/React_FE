import * as actionTypes from "../actionTypes"

export const frLoaderStart=()=>({
    type:actionTypes.FR_LOADER_START
})

export const frLoaderOff=()=>({
    type:actionTypes.FR_LOADER_OFF
})


export const fetchFriendRequest=()=>({
    type:actionTypes.FETCH_FREIND_REQUEST
})


export const updateFriendRequestSuccess=(data)=>({
    type:actionTypes.UPDATE_FRIEND_REQUEST_SUCCESS,
    payload:{data}
})


export const updateFriendRequestFail=(data)=>({
    type:actionTypes.UPDATE_FRIEND_REQUEST_FAIL,
    payload:{data}
})


export const handleFriendRequest=(data)=>({
    type:actionTypes.HANDLE_FRIEND_REQUEST,
    payload:{data}
})


export const sendFriendRequest=(data)=>({
    type:actionTypes.SEND_FRIEND_REQUEST,
    payload:{data}
})


// export const sendFriendRequestSuccess=(data)=>({
//     type:actionTypes.UPDATE_SEND_FR_SUCCESS,
//     payload:{data}
// })

// export const sendFriendRequestFail=(data)=>({
//     type:actionTypes.UPDATE_SEND_FR_FAIL,
//     payload:{data}
// })