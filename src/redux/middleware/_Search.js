import * as actionTypes from "../actionTypes"
import {authApi,postApiRequest} from "../actions/api"
import * as API from "../../api"
import {store} from "../store/index"
import {searchLoaderStart,searchLoaderOff,globalSearchUpdateFail,globalSearchUpdateSuccess} from "../actions/search"
import history from "../../helpers/History"
import {Alert} from 'rsuite'



export const globalSearch=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GLOBAL_SEARCH){
        const state=store.getState()
        const token=state.AuthReducer.token
        let data=action.payload.data
        let onSuccess=actionTypes.GLOBAL_SEARCH_SUCCESS
        let onError=actionTypes.GLOBAL_SEARCH_FAIL
        dispatch(searchLoaderStart())
        dispatch(authApi('GET',API.SEARCH,data,onSuccess,onError,null,token))
    }
}

export const globalSearchSuccess=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.GLOBAL_SEARCH_SUCCESS){
        let data= action.payload
        if(data.data.people.count>0){
    
        dispatch(globalSearchUpdateSuccess(data.data.people))
        }

        dispatch(searchLoaderOff())
    }
}


export const globalSearchFail=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.GLOBAL_SEARCH_FAIL){
        dispatch(searchLoaderOff())

    }
}











export const searchMdl=[globalSearch,globalSearchSuccess]