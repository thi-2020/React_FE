import React from 'react'
import {ProfileCard,NewPost,Invite} from "../"
import {isMobile} from "react-device-detect"
import {images} from "../../constant"
import history from "../../helpers/History"
const {photos}=images
export default function Feed() {





    return (
        <div className="feed-page">
               <div className="container">
                <div className="row">
                   {!isMobile&& <div className="col-md-3">
                        <ProfileCard/>      
                    </div>}
                    <div className="col-md-6">
                        {!isMobile&&<NewPost/>}
                    </div>
                    <div className="col-md-3">
                       {!isMobile&& <img  src={photos.invite} className="invite-img" onClick={()=>history.push('/invite')} />}
                    </div>
                </div>
                </div> 
        </div>
    )
}
