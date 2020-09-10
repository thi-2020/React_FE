import React,{useState,useEffect} from 'react'
import {connect} from "react-redux"
import * as API from "../../api/index"
import * as frndReq from "../../redux/actions/friendRequest"
import * as MUTUAL from "../../redux/actions/mutualFriends"
import MutualFriends from "../Mutual-Friends/MutualFriends"
import {Button} from "rsuite"


function SearchDesktop(props) {
    const {search,frLoading,_sendFriendRequest,_handleMutualFriends,_MUTUAL}=props
    const [stateLoading,setLoading]=useState(0)
    const [show,setShow]=useState(false)
    const sendFriendRequest=(userid)=>{
        setLoading(userid)
        let data={
            user_id:userid
        }
        _sendFriendRequest(data)
    }

    const handleMutualFriends=(usrid)=>{
        setShow(true)
        _handleMutualFriends(usrid)

    }

    return (
        <div className="search-page-desktop">
            <div className="container">
               {search!=null&&search.results.map((item,index)=>{return( 
               <div className="search-container">
                    <div className="profile-pic-box">
                    <img  src={`${API.BASE_URI}${item.thumbnail}`}  />
                    </div>
                    <div className="user-info-box" >
                        <h4>{item.full_name}</h4>
                       {item.mutual_connections>0&&
                       <p onClick={()=>handleMutualFriends(item.user_id)}
                       >{`${item.mutual_connections} Mutual ${item.mutual_connections>1?"Connections":"Connection"}`}</p>}
                    </div>
                    <div className="btn-box">
                        {item.friendship_status==='friend'&& <div>
                        <Button appearance="subtle" disabled >Friend</Button>
                        </div>}
                        {item.friendship_status==='not_friend'&&<div>
                        <Button appearance="primary" onClick={()=>sendFriendRequest(item.user_id)}
                        loading={frLoading && stateLoading===item.user_id}
                        >Add Friend</Button>
                        </div>}
                        {item.friendship_status==='friend_request_sent'&& <div>
                        <Button appearance="primary" disabled >Request Sent</Button>
                        </div>}
                    </div>
                </div>)})}
            </div>
            <MutualFriends  show={show} setShow={setShow} data={_MUTUAL!=null?_MUTUAL.results:null} />
        </div>
    )
}







const mapStateToProps=(state)=>{
    return{
       search:state.SearchReducer.data,
       frLoading:state.FriendRequestReducer.loading,
       _MUTUAL:state.MutualFriendReducer.data
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        _sendFriendRequest:(data)=>dispatch(frndReq.sendFriendRequest(data)),
        _handleMutualFriends:(data)=>dispatch(MUTUAL.handleMutualFriend(data))

    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SearchDesktop)