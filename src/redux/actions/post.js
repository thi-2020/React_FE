import * as actionTypes from "../actionTypes"


export const handleLike=(data)=>({
    type:actionTypes.LIKE_POST,
    payload:{data}
})