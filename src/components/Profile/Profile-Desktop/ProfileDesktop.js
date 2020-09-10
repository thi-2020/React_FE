import React from 'react'
import Banner from "./Banner"
import Stats from "./Stats"
import {NewPost} from "../../"
import SelfTimeline from "./Self-Timeline/SelfTimeline"
export default function ProfileDesktop() {
    return (
        <div className="profile-page-desktop">
            <div className="container">
            <Banner/>
            <div className="row">
                <div className="col-4">
                <Stats/>
                </div>
                <div className="col-8">
                <div className="mt-4">
                    <NewPost/>
                    <SelfTimeline/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
