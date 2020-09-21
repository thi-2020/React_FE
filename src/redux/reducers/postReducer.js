import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    like:null,
    error:null
}



const updateFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const updateLikeSuccess=(action,state)=>{
    return updateObject(state,{
        like:action.payload.data
    })
}

const LoaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}
const LoaderOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}



const PostReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_LIKE_POST_SUCCESS:return updateLikeSuccess(action,state);
        case actionTypes.UPDATE_LIKE_POST_FAIL:return updateFail(action,state);
        case actionTypes.LIKE_POST_START:return LoaderStart(action,state)
        case actionTypes.LIKE_POST_OFF:return LoaderOff(action,state)

        default:
            return state
    }
}



export default PostReducer