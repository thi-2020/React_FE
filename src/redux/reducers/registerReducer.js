import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"
import { update } from "lodash"

const initialState={
    loading:false,
    data:null,
    error:null
}



const registerStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}


const registerOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}

const registerSuccess=(action,state)=>{
    return updateObject(state,{
        data:action.payload.data
    })
}

const registerFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.error
    })
}

const registerRemove=(action,state)=>{
    return updateObject(state,{
        data:null
    })
}

const RegisterReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.REGISTER_UPDATE_SUCCESS:return registerSuccess(action,state);
        case actionTypes.REGISTER_UPDATE_FAIL:return registerFail(action,state);
        case actionTypes.REGISTER_LOADER_START:return registerStart(action,state);
        case actionTypes.REGISTER_LOADER_OFF:return registerOff(action,state)
        case actionTypes.REMOVE_REGISTER_DATA:return registerRemove(action,state)
        default:
            return state
    }
}



export default RegisterReducer