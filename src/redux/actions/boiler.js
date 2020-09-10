import * as actionTypes from "../actionTypes"



export const handle=(data)=>({
    type:actionTypes,
    payload:{data}
})


export const handleSuccess=(data)=>({
    type:actionTypes,
    payload:{data}
})



export const handleFail=(data)=>({
    type:actionTypes,
    payload:{data}
})

export const loaderStart=()=>({
    type:actionTypes
})


export const loaderFail=()=>({
    type:actionTypes
})