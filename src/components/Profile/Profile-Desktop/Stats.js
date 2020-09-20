import React from 'react'
import history from "../../../helpers/History"
export default function Stats(props) {
    const {profile}=props
    return (
        <div className="stats-page">
            {profile!=null&&<>
            <div className="stats-box" onClick={()=>history.push('/connection')} >
                <div className="stat-box">
                <h2>{profile.no_of_friend}</h2>
                <p>Followers</p>
                </div>
                <div className="stat-box">
                <h2>{profile.no_of_following}</h2>
                <p>Following</p>
                </div>
                <div className="stat-box">
                <h2>{profile.no_of_followers}</h2>
                <p>Connections</p>
                </div>
            </div>
            </>}
        </div>
    )
}
