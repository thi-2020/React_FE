import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {updateCreatePostSuccess,updateCreatePostFail,loaderStart,loaderFail} from "../actions/createPost"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const handleCreatePost=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CREATE_POST){
        let data=action.payload.data
        const formData=new FormData()
        formData.append('content',data.content);
        formData.append('visibilty_status','everyone')
        formData.append('image',data.image)
        let onSuccess=actionTypes.CREATE_POST_SUCCESS;
        let onError=actionTypes.CREATE_POST_FAIL
        dispatch(authApi('POST',API.CREATE_POST,null,onSuccess,onError,formData,null))
        dispatch(loaderStart())
    }
}

export const handleCreatePostSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CREATE_POST_SUCCESS){
        let data=action.payload
        if(data){
            dispatch(updateCreatePostSuccess(data))
            history.push('/profile')
        }
        dispatch(loaderFail())
    }
}

export const handleCreatePostFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.CREATE_POST_FAIL){
        let error=action.payload
        if(error){
            dispatch(updateCreatePostFail(error))
        }
        dispatch(loaderFail())
    }
}




export const createPostMdl=[handleCreatePost,handleCreatePostSuccess,handleCreatePostFail]