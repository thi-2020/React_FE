import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null
}



const loaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}




const MiscellaneousReducer=(state=initialState,action)=>{
    switch (action.type){
                case actionTypes.INVITATION_LOADER_START:return loaderStart(action,state)
               


        default:
            return state
    }
}



export default MiscellaneousReducer