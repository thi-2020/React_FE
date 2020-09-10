import * as actionTypes from "../actionTypes"
import * as API  from "../../api"
import axios from "axios"


export const api=({dispatch})=>next=>action=>{
    if(action.type===actionTypes.API_REQUEST){
        const {method,url,onSuccess,onError,data,param}=action.meta;
        console.log("API Request Data: ",data)
        console.log("API Parmas: ",param)

        axios.interceptors.response.use(response=>{
            // console.log("Response from Interceptor: ",response.request.response)   
            return response
        })

        axios.interceptors.request.use(request=>{
            console.log("Request from Interceptor: ",request)   
            return request
        })
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
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            dispatch({type:onError})

        })
    }

    return next(action)
}