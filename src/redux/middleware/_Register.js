import * as actionTypes from "../actionTypes"
import {postApiRequest} from "../actions/api"
import * as API from "../../api"
import {registerSuccess,registerFail,registerLoaderStart,registerLoaderOff} from "../actions/register"
import {authTokenInsert} from "../actions/auth"
import history from "../../helpers/History"
import {Alert} from 'rsuite'

let checkout=undefined

export const register=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.UI_REGISTER_START){
        let data=action.payload.data
        dispatch(registerLoaderStart())
        dispatch(postApiRequest('POST',API.REGISTER,null,actionTypes.REGISTER_SUCCESS,actionTypes.REGISTER_FAIL,data,null))
    }
}

export const isRegisterSuccess=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.REGISTER_SUCCESS){
        let data= action.payload
        console.log("Register Data:----------------: ",data)
        if(data!=null && data.data.access){
            dispatch(registerSuccess(data.data))
            dispatch(authTokenInsert(data.data.access))
            dispatch(registerLoaderOff())
            if(!checkout){
                history.push('/')
            }
            Alert.success('Registration Successfull !',2000)
        }
        
    }
}




export const isRegisterFail=({dispatch})=>next=>action=>{
    next(action)

    if(action.type===actionTypes.REGISTER_FAIL){
        let data=action.payload
        if(data){
            dispatch(registerFail(data.error))
        }
        dispatch(registerLoaderOff())
    }
}


export const registerMdl=[register,isRegisterFail,isRegisterSuccess]