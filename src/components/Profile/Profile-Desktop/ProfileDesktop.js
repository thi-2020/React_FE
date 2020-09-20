import React from 'react'
import Banner from "./Banner"
import Stats from "./Stats"
import {NewPost} from "../../"
import SelfTimeline from "./Self-Timeline/SelfTimeline"
import {connect} from "react-redux"
function ProfileDesktop(props) {
    const {profile}=props
    return (
        <div className="profile-page-desktop">
            <div className="container">
            <Banner
            profile={profile}
            />
            <div className="row">
                <div className="col-4">
                <Stats profile={profile} />
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



const mapStateToProps=(state)=>{
    return{
        profile:state.ProfileReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfileDesktop)
