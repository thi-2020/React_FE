import * as actionTypes from "../actionTypes"
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null
}



const updateSearchFail=(action,state)=>{
    return updateObject(state,{
        error:action.payload.data
    })
}

const updateSearchSuccess=(action,state)=>{
    return updateObject(state,{
        data:action.payload.data
    })
}

const searchLoaderStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}
const searchLoaderOff=(action,state)=>{
    return updateObject(state,{
        loading:false
    })
}



const SearchReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.GLOBAL_SEARCH_UPDATE_SUCCESS: return updateSearchSuccess(action,state);
        case actionTypes.GLOBAL_SEARCH_UPDATE_FAIL:return updateSearchFail(action,state);
        case actionTypes.SEARCH_LOADER_START:return searchLoaderStart(action,state)
        case actionTypes.SEARCH_LOADER_OFF:return searchLoaderOff(action,state)

        default:
            return state
    }
}



export default SearchReducer