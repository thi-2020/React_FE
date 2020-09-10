import React,{useState,useEffect} from 'react'
import {Avatar,Input,InputGroup,Icon} from "rsuite"
import {AiOutlineMessage} from "react-icons/all"
import {connect} from "react-redux"
import {images} from "../../constant"
import history from "../../helpers/History"
import * as frndReq from "../../redux/actions/friendRequest"
import * as search from "../../redux/actions/search"
import HeaderWrapper from "../HOC/headerWrapper"
const {photos} =images
function HeaderTab(props) {
    const {fR,_fetchFriendRequest,_globalSearch,search,loading}=props
    const [searchInput,setSearch]=useState(false)
    const [searchQuery,setSearchQuery]=useState('')


    useEffect(()=>{
      _globalSearch(searchQuery)
    },loading)


    const searchFriend=(value)=>{
      setSearchQuery(value)
        setSearch(true)
        if(value.length>0){
          _globalSearch(value)
        }
      }
    return (
        <div className="header-tab-container">
            <div className="avatar-container">
                <Avatar circle className="avatar"  src={photos.avatar} onClick={()=>history.push('/profile')} size="sm"/>
            </div>
            <div className="search-container">
            <InputGroup inside>
                <InputGroup.Button>
                <Icon icon="search" />
            </InputGroup.Button>
              <Input placeholder="Search" onClick={()=>history.push('/mobile-search')}
                onChange={(value)=>searchFriend(value)}
              block/>
            </InputGroup>
            </div>
            <div className="chat-container">
                <AiOutlineMessage className="icon" size={30} />
            </div>
        </div>
    )
}




const mapStateToProps=(state)=>{
    return{
        search:state.SearchReducer.data,
        loading:state.FriendRequestReducer.loading

    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        _globalSearch:(value)=>dispatch(search.globalSearch(value))
    }
  }
  

HeaderTab=connect(mapStateToProps,mapDispatchToProps)(HeaderTab)

  export default HeaderWrapper(HeaderTab)