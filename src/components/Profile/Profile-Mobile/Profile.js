import React from 'react'
import {Banner,ProfileDetail,Connections} from "./index"
import {NewPost} from "../../"
import SelfTimeline from "../Profile-Desktop/Self-Timeline/SelfTimeline"
import {connect} from "react-redux"
function Profile(props) {
    const {profile}=props
    return (
        <div className="profile-mobile-container">
            <Banner profile={profile} />
            <ProfileDetail profile={profile} />
            <Connections profile={profile} />
            <div className="mt-2">
            <NewPost/>
            </div>
            <SelfTimeline/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
       profile:state.ProfileReducer.data
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
     
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Profile)