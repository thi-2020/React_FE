import * as actionTypes from "../actionTypes"



export const fetchSelfTimeline=(data)=>({
    type:actionTypes.SELF_TIMELINE,
    payload:{data}
})


export const updateSelfTimelineSuccess=(data)=>({
    type:actionTypes.UPDATE_SELF_TIMELINE_SUCCESS,
    payload:{data}
})



export const updateSelfTimelineFail=(data)=>({
    type:actionTypes.UPDATE_SELF_TIMELINE_FAIL,
    payload:{data}
})

export const loaderStart=()=>({
    type:actionTypes.SELF_TIMELINE_START
})


export const loaderFail=()=>({
    type:actionTypes.SELF_TIMELINE_OFF
})