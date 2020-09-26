import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    like:null,
    unlike:null,
    comment:null,
    comments:null,
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

const updateUnlikeSuccess=(action,state)=>{
    return updateObject(state,{
        unlike:action.payload.data
    })
}


const updateCommentSuccess=(action,state)=>{
    return updateObject(state,{
        comment:action.payload.data
    })
}


const fetchCommentSuccess=(action,state)=>{
    return updateObject(state,{
        comments:action.payload.data
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
        case actionTypes.POST_LOADER_START:return LoaderStart(action,state)
        case actionTypes.POST_LOADER_OFF:return LoaderOff(action,state)
        case actionTypes.UPDATE_UNLIKE_POST_SUCCESS:return updateUnlikeSuccess(action,state)
        case actionTypes.UPDATE_CREATE_COMMENT_SUCCESS:return updateCommentSuccess(action,state)
        case actionTypes.UPDATE_FETCH_COMMENTS_SUCCESS:return fetchCommentSuccess(action,state)
        default:
            return state
    }
}



export default PostReducer