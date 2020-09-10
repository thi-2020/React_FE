import React from 'react'

export default function Connections(props) {
    const {profile}=props
    return (
        <div className="connections-box">
           {profile!=null&& 
           <>
           <div className="inside-box">
                <h3>{profile.no_of_followers}</h3>
                <p>Followers</p>
            </div>
            <div className="inside-box">
                <h3>{profile.no_of_following}</h3>
                <p>Following</p>
            </div>
            <div className="inside-box">
                <h3>{profile.no_of_friend}</h3>
                <p>Connections</p>
            </div>
            </>
            }
        </div>
    )
}
