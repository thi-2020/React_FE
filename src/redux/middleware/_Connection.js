import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
// import {} from "../actions/"
import history from "../../helpers/History"
import {Alert} from 'rsuite'
import {store} from "../store/index"

export const handleConnection=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_FOLLOWERS_LIST){
        const state=store.getState()
        const userId=state.ProfileReducer.data.user_id
        let onSuccessConnection=actionTypes.GET_CONNECTION_LIST_SUCCESS;
        let onErrorConnection=actionTypes.GET_CONNECTION_LIST_FAIL;
        let onSuccessFollowers=actionTypes.GET_FOLLOWERS_LIST_SUCCESS;
        let onErrorFollowers=actionTypes.GET_FOLLOWERS_LIST_FAIL;
        let onSuccessFollowing=actionTypes.GET_FOLLOWING_LIST_SUCCESS;
        let onErrorFollowing=actionTypes.GET_FOLLOWING_LIST_FAIL;
        let data={
            user_id:userId
        }
        dispatch(authApi('POST',API.CONNECTIONS,null,onSuccessConnection,onErrorConnection,data,null))
        dispatch(authApi('POST',API.FOLLOWERS_LIST,null,onSuccessFollowers,onErrorFollowers,data,null))
        dispatch(authApi('POST',API.FOLLOWING_LIST,null,onSuccessFollowing,onErrorFollowing,data,null))
        dispatch({type:actionTypes.GET_CONNECTION_START})
    }
}

export const handleConnectionSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_CONNECTION_LIST_SUCCESS){
        dispatch({type:actionTypes.GET_CONNECTION_OFF})
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_CONNECTION_SUCCESS,
                      payload:data
            })
        }
    }
}

export const handleConnectionFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_CONNECTION_LIST_FAIL){
        dispatch({type:actionTypes.GET_CONNECTION_OFF})

    }
}

export const handleFollowersSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_FOLLOWERS_LIST_SUCCESS){
        dispatch({type:actionTypes.GET_CONNECTION_OFF})

        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_FOLLOWERS_SUCCESS,
                      payload:data
            })
        }
    }
}

export const handleFollowersFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_FOLLOWERS_LIST_FAIL){
        dispatch({type:actionTypes.GET_CONNECTION_OFF})

    }
}

export const handleFollowingSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_FOLLOWING_LIST_SUCCESS){
        dispatch({type:actionTypes.GET_CONNECTION_OFF})
        let data=action.payload;
        if(data){
            dispatch({type:actionTypes.UPDATE_FOLLOWING_SUCCESS,
                      payload:data
            })
        }
    }
}

export const handleFollowingFail=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GET_FOLLOWING_LIST_FAIL){
        dispatch({type:actionTypes.GET_CONNECTION_OFF})

    }
}


export const connectionMdl=[

handleConnection,
handleConnectionSuccess,
handleConnectionFail,
handleFollowersSuccess,
handleFollowersFail,
handleFollowingSuccess,
handleFollowingFail

]