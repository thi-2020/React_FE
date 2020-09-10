import React from 'react'
import Info from "./Info"
import {images} from "../../../constant"
import {Avatar} from "rsuite"
const {photos}=images
export default function Banner() {
    return (
        <div className="banner-desktop">
                <div className="banner-photo-box">
                <img src={photos.profileBanner} />
                <div className="coverBorder"></div>
                </div>
                <div className="avatar-box">
                <div className="profile-pic-box">
                <Avatar src={photos.avatar}  circle />
                </div>
                <Info/>
                </div>
        </div>
    )
}
