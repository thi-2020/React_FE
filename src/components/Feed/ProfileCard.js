import React from 'react'
import {Avatar} from "rsuite"
import {images} from "../../constant"

const{photos}=images
export default function ProfileCard() {
    return (
        <div className="profile-card-box">
            <div className="top-banner">  </div>
            <div className="avatar-container">
            <Avatar src={photos.avatar} size="lg" alt="Himanshu Barmola" className="avatar" />
            </div>
            <div className="profile-info">
            <h5>Himanshu Barmola</h5>
            <h6>Front End Developer at Qilin Software Lab</h6>
            </div>
        </div>
    )
}
