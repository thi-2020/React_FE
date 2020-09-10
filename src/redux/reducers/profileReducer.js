import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null
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



const ProfileReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_FETCH_PROFILE_SUCCESS:return updateSuccess(action,state);
        case actionTypes.UPDATE_FETCH_PROFILE_FAIL:return updateFail(action,state);
        case actionTypes.FETCH_PROFILE_START:return LoaderStart(action,state)
        case actionTypes.FETCH_PROFILE_OFF:return LoaderOff(action,state)

        default:
            return state
    }
}



export default ProfileReducer