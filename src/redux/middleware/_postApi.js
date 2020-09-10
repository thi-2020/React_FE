import * as actionTypes from "../actionTypes"
import * as API  from "../../api"
import axios from "axios"
import { Alert } from "rsuite";


export const postApi=({dispatch})=>next=>action=>{
    if(action.type===actionTypes.POST_API_REQUEST){
        const {method,url,onSuccess,onError,data,param}=action.meta;
        axios.defaults.headers.post['Content-Type']=['application/json']

        // axios.interceptors.response.use(response=>{
            
        //     console.log("Auth API Interceptor Response: ",response)
        //     return response!=undefined?response:false
        // },error=>{
        //     if(error!=undefined){

        //         console.log("Auth API Interceptor Error: ",error.response)
        //         console.log("Auth API Interceptor Error: ",error.request)
        //         if(error.response){
        //             console.log("Errors in Response: ",error.response)
        //             if(error.response.status>400 && error.response.status<500){
        //                 let err= JSON.parse(error.response.request.response)
        //                 console.log("JSON Parsed Error: ",err)
        //                 return Promise.reject(err)
        //                 // return err
        //             }
        //         }
        //         else if(error.request!==undefined){
        //             if(error.request.status===0){
        //                 const REQ_ERR="Your internet connection is not stable"
        //                 return Promise.reject(REQ_ERR)
        //             }
        //         }
               
        //     }
         
        //     // return error

        // })
        axios({
            url:url,
            method:method,
            baseURL:API.BASE_URI,
             params:{
                 ...param
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
