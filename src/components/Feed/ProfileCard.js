import React from 'react'
import {Avatar} from "rsuite"
import {images} from "../../constant"
import {connect} from "react-redux"
import * as API from "../../api"
const{photos}=images
function ProfileCard(props) {

        const {profile}=props
    return (
        <div className="profile-card-box">
            <div className="top-banner">  </div>
            <div className="avatar-container">
            <Avatar src={`${API.BASE_URI}${profile!=null&&profile.profile_photo}`} size="lg" alt="Himanshu Barmola" className="avatar" circle />
            </div>
            <div className="profile-info">
            <h5>{profile!=null&&profile.full_name}</h5>
            {/* <h6>Front End Developer at Qilin Software Lab</h6> */}
            </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(ProfileCard)
