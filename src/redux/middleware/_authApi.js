import * as actionTypes from "../actionTypes"
import * as API  from "../../api"
import axios from "axios"
import {store} from "../store/index"


export const authApi=({dispatch})=>next=>action=>{
    if(action.type===actionTypes.AUTH_API_REQUEST){
        const {method,url,onSuccess,onError,data,param}=action.meta;
        let body=action.payload
        console.log("API Request Data: ",data)
        console.log("API Parmas: ",param)
        const state=store.getState()
        const token=state.AuthReducer.token
        axios.interceptors.response.use(response=>{
            // console.log("Response from Interceptor: ",response.request.response)   
            return response
        })

        axios({
            url:url,
            method:method,
            baseURL:API.BASE_URI,
            // eslint-disable-next-line
            headers:{Authorization:'Bearer'+" "+token},
             params:{
                 search:body
             },
             data:data,
             transformResponse:[(data)=>{
                 console.log('Data Response: ',JSON.parse(data))
             }],
        }).then(res=>{
            console.log("Response: ",JSON.parse(res.request.response))
            if(res.request){
                dispatch({type:onSuccess,payload:JSON.parse(res.request.response)})
            }
        })
        .catch(error=>{
            if(error.response){
                console.log("Error Response: ",error.response)
                if(error.response.status>=400 && error.response.status<=500){
                        let err=JSON.parse(error.response.request.response)
                  dispatch({type:onError,payload:err})
                }
                else{
                    console.log("Error not Processed: ",error)
                }
            }
             
        })
    }

    return next(action)
}




