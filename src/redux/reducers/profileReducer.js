import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null,
    photo:null
}



const updateFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const updateSuccess=(action,state)=>{
    return updateObject(state,{
        data:action.payload.data
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


const updatePhoto=(action,state)=>{
    return updateObject(state,{
        photo:action.payload
    })
}

const resetPhoto=(action,state)=>{
    return updateObject(state,{
        photo:null
    })
}



const ProfileReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_FETCH_PROFILE_SUCCESS:return updateSuccess(action,state);
        case actionTypes.UPDATE_FETCH_PROFILE_FAIL:return updateFail(action,state);
        case actionTypes.FETCH_PROFILE_START:return LoaderStart(action,state)
        case actionTypes.FETCH_PROFILE_OFF:return LoaderOff(action,state)
        case actionTypes.UPDATE_CHANGE_PROFILE_SUCCESS:return updatePhoto(action,state)
        case actionTypes.RESET_CHANGE_PROFILE_SUCCESS:return resetPhoto(action,state)
        default:
            return state
    }
}



export default ProfileReducer