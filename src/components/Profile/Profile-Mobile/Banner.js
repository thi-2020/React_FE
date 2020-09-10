import React from 'react'
import {images} from "../../../constant"
import {Avatar} from "rsuite"
import * as API from "../../../api"
const {photos}=images

export default function Banner(props) {
    const {profile}=props

    return (
        <div className="banner-container">
            {profile!=null&&<>
            <img src={`${API.BASE_URI}${profile.cover_photo}`} />
            <Avatar src={`${API.BASE_URI}${profile.profile_photo}`} size="lg"  className="banner-profile-photo" circle />
            </>}
        </div>
    )
}
