import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {postLoaderStart,postLoaderOff} from "../actions/post"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const handleLike=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.LIKE_POST){
        let data=action.payload.data;
        let onSuccess=actionTypes.LIKE_POST_SUCCESS;
        let onError=actionTypes.LIKE_POST_FAIL;

        dispatch(authApi('POST',API.LIKE_POST,null,onSuccess,onError,data,null))
        dispatch(postLoaderStart())
    }
}

export const handleLikeSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.LIKE_POST_SUCCESS){
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_LIKE_POST_SUCCESS,payload:{data}})
        }
        dispatch({type:actionTypes.SELF_TIMELINE})
        dispatch(postLoaderOff())

    }
}

export const handleLikeFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.LIKE_POST_FAIL){
        let data = action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_LIKE_POST_FAIL,payload:{data}})
        }
        dispatch(postLoaderOff())
    }
}


export const handleUnlike=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.UNLIKE_POST){
        let data=action.payload.data;
        let onSuccess=actionTypes.UNLIKE_POST_SUCCESS;
        let onError=actionTypes.UNLIKE_POST_FAIL;

        dispatch(authApi('POST',API.UNLIKE_POST,null,onSuccess,onError,data,null))
        dispatch(postLoaderStart())
    }
}

export const handleUnlikeSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.UNLIKE_POST_SUCCESS){
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_UNLIKE_POST_SUCCESS,payload:{data}})
        }
        dispatch({type:actionTypes.SELF_TIMELINE})
        dispatch(postLoaderOff())
    }
}


export const handleUnlikeFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.UNLIKE_POST_FAIL){
        let data = action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_UNLIKE_POST_FAIL,payload:{data}})
        }
        dispatch(postLoaderOff())
    }
}


export const handleCreateComment=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CREATE_COMMENT){
        let data=action.payload.data;
        let onSuccess=actionTypes.CREATE_COMMENT_SUCCESS;
        let onError=actionTypes.CREATE_COMMENT_FAIL;

        dispatch(authApi('POST',API.CREATE_COMMENT,null,onSuccess,onError,data,null))
        dispatch(postLoaderStart())
    }
}


export const handleCreateCommentSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CREATE_COMMENT_SUCCESS){
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_CREATE_COMMENT_SUCCESS,payload:{data}})
            dispatch({type:actionTypes.FETCH_COMMENTS})
        }
        dispatch({type:actionTypes.SELF_TIMELINE})
        dispatch(postLoaderOff())
    }
}

export const handleCreateCommentFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CREATE_COMMENT_FAIL){
        let data = action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_CREATE_COMMENT_FAIL,payload:{data}})
        }
        dispatch(postLoaderOff())      
    }
}

export const handleFetchComments=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_COMMENTS){
        let data=action.payload.data;
        let onSuccess=actionTypes.FETCH_COMMENTS_SUCCESS;
        let onError=actionTypes.FETCH_COMMENTS_FAIL;
        dispatch(authApi('POST',API.FETCH_COMMENTS,null,onSuccess,onError,data,null))
        dispatch(postLoaderStart())
    }
}

export const handleFetchCommentsSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_COMMENTS_SUCCESS){
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_FETCH_COMMENTS_SUCCESS,payload:{data:data.data}})
        }
        dispatch({type:actionTypes.SELF_TIMELINE})
        dispatch(postLoaderOff())
    }
}

export const handleFetchCommentsFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_COMMENTS_FAIL){
        let data = action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_FETCH_COMMENTS_FAIL,payload:{data}})
        }
        dispatch(postLoaderOff())      
    }
}



export const postMdl=[
    handleLike,
    handleLikeSuccess,
    handleLikeFail,
    handleUnlike,
    handleUnlikeSuccess,
    handleUnlikeFail,
    handleCreateComment,
    handleCreateCommentFail,
    handleCreateCommentSuccess,
    handleFetchComments,
    handleFetchCommentsSuccess,
    handleFetchCommentsFail
]