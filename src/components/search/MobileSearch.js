import React, { useState } from 'react'
import {connect} from "react-redux"
import * as search from "../../redux/actions/search"
import * as API from "../../api/index"
import * as frndReq from "../../redux/actions/friendRequest"
import {Placeholder,Button} from "rsuite"
import * as MUTUAL from "../../redux/actions/mutualFriends"
import MutualFriends from "../Mutual-Friends/MutualFriends"
const {Paragraph}=Placeholder

function MobileSearch(props) {
    const {search,loading,_sendFriendRequest,frLoading,_handleMutualFriends,_MUTUAL}=props
    const [stateLoading,setLoading]=useState(0)
    const [show,setShow]=useState(false)

    const renderLoading=()=>{
        for(var i=0; i<=6; i++ ){
            return(
                <Paragraph graph active rows={2} />
            )
        }
    }

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
        <div className="mobile-search-box" >
            {search!=null && search.results.map((item,index)=>{
                return(
                    <div className="global-search-item">
                        <div className="global-profile-div">
                        <img  src={`${API.BASE_URI}${item.thumbnail}`}  />
                        <div style={{display:"flex",flexDirection:"column",paddingLeft:10}}>
                        <h4>{item.full_name}</h4>
                          {item.mutual_connections>0&&
                       <p onClick={()=>handleMutualFriends(item.user_id)} style={{margin:0}}
                       >{`${item.mutual_connections} Mutual ${item.mutual_connections>1?"Connections":"Connection"}`}</p>}
                        </div>
                      
                        </div>
                  
                    <div>
                        {item.friendship_status=='not_friend'&&
                        <Button appearance='primary' loading={frLoading && stateLoading===item.user_id} onClick={()=>sendFriendRequest(item.user_id)} >Connect</Button>
                        }
                        {item.friendship_status=='friend_request_sent'&&
                        <Button appearance='primary' loading={frLoading && stateLoading===item.user_id} disabled onClick={()=>sendFriendRequest(item.user_id)} >Sent</Button>
                        }   
                        {item.friendship_status=='friend'&&
                        <Button appearance='primary' loading={frLoading && stateLoading===item.user_id} disabled onClick={()=>sendFriendRequest(item.user_id)} >Connected</Button>
                        } 
                    </div>
                    </div>
                )
            })}
            {loading&&renderLoading()}
            <MutualFriends  show={show} setShow={setShow} data={_MUTUAL!=null?_MUTUAL.results:null} />

        </div>
    )
}






const mapStateToProps=(state)=>{
    return{
        search:state.SearchReducer.data,
        loading:state.SearchReducer.loading,
        frLoading:state.FriendRequestReducer.loading,
        _MUTUAL:state.MutualFriendReducer.data


    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        _globalSearch:(value)=>dispatch(search.globalSearch(value)),
        _sendFriendRequest:(data)=>dispatch(frndReq.sendFriendRequest(data)),
        _handleMutualFriends:(data)=>dispatch(MUTUAL.handleMutualFriend(data))

 
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(MobileSearch)