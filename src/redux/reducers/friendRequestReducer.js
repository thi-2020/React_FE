import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null
}



const updateFriendRequestFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const updateFriendRequestSuccess=(action,state)=>{
    return updateObject(state,{
        data:action.payload.data
    })
}

const frLoaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}
const frLoaderOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}



const FriendRequestReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_FRIEND_REQUEST_SUCCESS:return updateFriendRequestSuccess(action,state);
        case actionTypes.UPDATE_FRIEND_REQUEST_FAIL:return updateFriendRequestFail(action,state);
        case actionTypes.FR_LOADER_START:return frLoaderStart(action,state)
        case actionTypes.FR_LOADER_OFF:return frLoaderOff(action,state)

        default:
            return state
    }
}



export default FriendRequestReducer