import React, { useEffect,useState } from 'react'
import { connect } from "react-redux"
import * as action from "../../redux/actions/auth"
import * as frndReq from "../../redux/actions/friendRequest"
import { images } from "../../constant"
import { Button } from "rsuite"
import * as API from "../../api/index"
const { photos } = images
function FriendRequestMobile(props) {
  const { fR ,loading,_handleFriendRequest,_sendFriendRequest } = props
  const [accept,setAccept]=useState(false)
  const [reject,setReject]=useState(false)
  const [seletedID,setSelectedId]=useState(null)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  useEffect(()=>{
    setAccept(false)
    setReject(false)
  },fR)

  const acceptFriendRequest=(id)=>{
    let data={
      request_id:id,
      request_answer:"accepted"
    }
    setSelectedId(id)
    setAccept(true)
    _handleFriendRequest(data)
  }

  const rejectFriendRequest=(id)=>{
    let data={
      request_id:id,
      request_answer:"rejected"
    }
    setReject(true)
    setSelectedId(id)
    _handleFriendRequest(data)

  }

  return (
    <div className="friend-request">

      {fR != null && fR.results.map((item, index) => {
        return (
          <div className="fr-box" key={index}>
            <div className="avatar-box">
              <img src={`${API.BASE_URI}${item.thumbnail}`} />
              {/* <img src={photos.avatar1} />  */}
            </div>
            <div className="info-box">
              <h4>{item.full_name}</h4>
              <p>{`${item.mutual_connections} Mutual Connection${item.mutual_connections>1?'s':""}`}</p>
              <div className="btn-container">
                <Button appearance="primary" className="success-btn" 
                     onClick={()=>acceptFriendRequest(item.request_id)} loading={accept && loading && seletedID==item.request_id}
               
                >Accept</Button>
                <Button appearance="primary" className="danger-btn"
                     onClick={()=>rejectFriendRequest(item.request_id)} loading={reject && loading && seletedID==item.request_id}
               
                >Ignore</Button>
              </div>
            </div>
          </div>
        )
      })}

      {fR!=null && fR.count==0&&
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h3>No Friend Request right now.</h3>
      </div>
      }
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
    fR: state.FriendRequestReducer.data,
    loading:state.FriendRequestReducer.loading

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _Logout: () => dispatch(action.authTokenRemoveStart()),
    _fetchFriendRequest: () => dispatch(frndReq.fetchFriendRequest()),
    _handleFriendRequest:(data)=>dispatch(frndReq.handleFriendRequest(data)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestMobile)








