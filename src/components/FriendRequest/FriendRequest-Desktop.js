import React, { useEffect,useState } from 'react'
import { connect } from "react-redux"
import * as action from "../../redux/actions/auth"
import * as frndReq from "../../redux/actions/friendRequest"
import { images } from "../../constant"
import { Button } from "rsuite"
import * as API from "../../api/index"
import { actionTypes } from 'redux-form'
const { photos } = images
function FriendRequestDesktop(props) {
  const { fR ,loading,_handleFriendRequest } = props
  const [accept,setAccept]=useState(false)
  const [reject,setReject]=useState(false)
  const [selectedId,setSelectedId]=useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    setAccept(false)
    setReject(false)
  },fR)

  const acceptFriendRequest=(id)=>{
    setSelectedId(id)
    let data={
      request_id:id,
      request_answer:"accepted"
    }
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
    <div className="fr-desktop">
      <div className="container">
        <div className="heading-container">
        <h2>Response to your {fR!=null?fR.count:""} Requests </h2>
        </div>
        {fR != null && fR.results.map((item, index) => {
          return (
            <div className="fr-box">
              <div className="fr-item-box">
                <div className="avatar-box">
                <img src={`${API.BASE_URI}${item.thumbnail}`} />
                  {/* <img src={photos.avatar1} /> */}
                </div>
                <div className="info-box" >
                  <h3>{item.full_name}</h3>
                 {item.mutual_connections>0&& <p>{`${item.mutual_connections} Mutual Connection${item.mutual_connections>1?'s':""}`}</p>}
                </div>
                <div className="fr-btn-box">
                  <div>
                    <Button appearance="primary" className="success-btn" block
                    onClick={()=>acceptFriendRequest(item.request_id)} loading={accept && loading && item.request_id===selectedId  }
                    >Accept</Button>
                  </div>
                  <div>
                    <Button appearance="primary" className="danger-btn"
                    onClick={()=>rejectFriendRequest(item.request_id)} loading={reject && loading && item.request_id===selectedId}
                    block >Ignore</Button>
                  </div>
                </div>
              </div>
              {/* <div />
              <div /> */}
            </div>
          )
        })}

      </div>
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
    _handleFriendRequest:(data)=>dispatch(frndReq.handleFriendRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestDesktop)
