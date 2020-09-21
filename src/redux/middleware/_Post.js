import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
// import {} from "../actions/"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const handleLike=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.LIKE_POST){
        let data=action.payload.data;
        let onSuccess=actionTypes.LIKE_POST_SUCCESS;
        let onError=actionTypes.LIKE_POST_FAIL;

        dispatch(authApi('POST',API.LIKE_POST,null,onSuccess,onError,data,null))
        dispatch({type:actionTypes.LIKE_POST_START})
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
        dispatch({type:actionTypes.LIKE_POST_OFF})

    }
}

export const handleLikeFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.LIKE_POST_FAIL){
        let data = action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_LIKE_POST_FAIL,payload:{data}})
        }
        dispatch({type:actionTypes.LIKE_POST_OFF})
    }
}




export const postMdl=[
    handleLike,
    handleLikeSuccess,
    handleLikeFail

]