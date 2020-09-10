import React,{useEffect,useState} from "react"
import {connect} from "react-redux"
import * as action from "../../redux/actions/search"
import * as profile from "../../redux/actions/profile"
import * as frndReq from "../../redux/actions/friendRequest"

const HeaderWrapper=WrapperComponent=>{

    const UpdatedComponent=(props)=>{
        const [searchInput,setSearch]=useState(false)
        const {_globalSearch,_fetchFriendRequest,isAuthenticated,fR,_fetchProfile,profile}=props

        useEffect(()=>{
            if(isAuthenticated){
                _fetchFriendRequest();
                _fetchProfile()
              }
        },[])

        const searchFriend=(value)=>{
            setSearch(true)
            if(value.length>0){
              _globalSearch(value)
            }
          }

        

        return(
            <WrapperComponent
            searchFriend={searchFriend}
            searchInput={searchInput}
            setSearch={setSearch}
            />
        )
    }

    const mapStateToProps=(state)=>{
        return{
           isAuthenticated:state.AuthReducer.isAuthenticated,
           fR:state.FriendRequestReducer.data,
           profile:state.ProfileReducer.data
        }
      }
      
      const mapDispatchToProps=(dispatch)=>{
        return{
          _globalSearch:(value)=>dispatch(action.globalSearch(value)),
          _fetchFriendRequest:()=>dispatch(frndReq.fetchFriendRequest()),
          _fetchProfile:()=>dispatch(profile.fetchProfile())
    
        }
      }
    return connect(mapStateToProps,mapDispatchToProps)(UpdatedComponent)
}

export default HeaderWrapper