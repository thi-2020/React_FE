import React from 'react'
import {GoVerified} from 'react-icons/all'
export default function ProfileDetail(props) {
    const {profile}=props
    return (
        <div className="profile-info-detail">
           {profile!=null&& <div className="username-box">
            <h3>{profile.full_name}</h3>
            <GoVerified className="verify" />
            </div>}
            {/* <h5>React Native Developer at Qilin Software Lab Pvt. Ltd</h5> */}
            {/* <h5>Himanshu Barmola</h5> */}
        </div>
    )
}
