import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    visibility:null,
    selected:null,
    error:null
}



const updateFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const visibilitySuccess=(action,state)=>{
    return updateObject(state,{
        visibility:action.payload.data
    })
}

const visibilitySelected=(action,state)=>{
    return updateObject(state,{
        selected:action.payload.data
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



const SettingsReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_GET_VISIBILITY_OPTIONS_SUCCESS:return visibilitySuccess(action,state);
        case actionTypes.UPDATE_GET_VISIBILITY_OPTIONS_FAIL:return updateFail(action,state);
        case actionTypes.SETTING_START:return LoaderStart(action,state)
        case actionTypes.SETTING_OFF:return LoaderOff(action,state)
        case actionTypes.UPDATE_VS_SUCCESS:return visibilitySelected(action,state)
        default:
            return state
    }
}



export default SettingsReducer