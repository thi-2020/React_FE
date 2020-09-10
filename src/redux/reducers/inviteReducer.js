import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null,
    NO_OF_INVITATION:null
}



const loaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}


const loaderOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}

const invitationSuccess=(action,state)=>{
    return updateObject(state,{
        data:action.payload.data,
        error:null,
        loading:false
    })
}

const invitationFail=(action,state)=>{
    return updateObject(state,{
        data:null,
        error:action.payload.data,
        loading:false
    })
}

const invitationNumber=(action,state)=>{
    return updateObject(state,{
        NO_OF_INVITATION:action.payload.data
    })
}

const InviteReducer=(state=initialState,action)=>{
    switch (action.type){
                case actionTypes.INVITATION_LOADER_START:return loaderStart(action,state)
                case actionTypes.INVITATION_LOADER_OFF:return loaderOff(action,state)
                case actionTypes.UPDATE_INVITATION_SUCCESS_DATA:return invitationSuccess(action,state)
                case actionTypes.UPDATE_INVITATION_FAIL_DATA:return invitationFail(action,state)
                case actionTypes.CHECK_INVITATION_UPDATE_SUCCESS:return invitationNumber(action,state)


        default:
            
            return state
    }
}



export default InviteReducer