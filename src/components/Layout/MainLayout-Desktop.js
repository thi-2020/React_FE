import React,{useEffect} from 'react'
import {Header,ProfileCard,NewPost} from '../index'
import PropTypes from 'prop-types';
import {images} from "../../constant"
import history from "../../helpers/History"
const {photos}=images

const MainLayoutDesktop=(props)=> {

    useEffect(()=>{
        console.log("Main Layout: ",props)
    },[])
    return (
        <div className="main-layout-desktop">
            {/* <Header/> */}
            <div className="container">
            <div className="row">
                <div className="col-3">
                    {/* <div className="left-layout"> */}
                    <ProfileCard/>
                    {/* </div> */}
                </div>
                <div className="col-6">
                    <div className="feed-box">
                    {/* <NewPost/> */}
                    {/* <props.children/> */}
                    {/* <props.component/> */}
                    {props.children}
                    
                    </div>        
                </div>
                <div className="col-3">
                <img  src={photos.invite} className="invite-img" onClick={()=>history.push('/invite')} />
                </div>
            </div>
            </div>       
        </div>
    )
}

MainLayoutDesktop.propTypes = {
    children: PropTypes.node
  };


  export default MainLayoutDesktop