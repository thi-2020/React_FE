import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {handleSuccess,handleFail,loaderStart,loaderFail} from "../actions/mutualFriends"
import history from "../../helpers/History"
import {Alert} from 'rsuite'


export const handleMutualFriends=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_MUTUAL_FRIENDS){
        let data={
            user_id:action.payload.data
        }
        let onSuccess=actionTypes.FETCH_MUTUAL_FRIENDS_SUCCESS;
        let onError=actionTypes.FETCH_MUTUAL_FRIENDS_FAIL
        dispatch(authApi('POST',API.MUTUAL_FRIENDS,null,onSuccess,onError,data,null))
    }
}

export const handleMutualFriendSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_MUTUAL_FRIENDS_SUCCESS){
        const data=action.payload
        console.log("Mutual Friends: ",data)
        dispatch(handleSuccess(data.data))
    }
}

export const handleMutualFriendFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.FETCH_MUTUAL_FRIENDS_FAIL){
        const data=action.payload
        dispatch(handleFail(data))
    }
}




export const mututalMdl=[handleMutualFriends,handleMutualFriendSuccess,handleMutualFriendFail]