import React,{useEffect,useState} from 'react'
import {GoHome,RiGroupLine,RiAddCircleLine,FiBell,FaCog} from "react-icons/all"
import {Badge} from "rsuite"
import {connect} from "react-redux"
import * as action from "../../redux/actions/auth"
import * as frndReq from "../../redux/actions/friendRequest"
import history from "../../helpers/History"
import { act } from 'react-dom/test-utils'
function FooterTab(props) {
    const {isAuthenticated,fR,_fetchFriendRequest}=props
    const [active,setActive]=React.useState([true,false,false,false,false])
    const activeClass=active.slice()

    useEffect(()=>{
        console.log("history:" ,history)
        if(isAuthenticated){
          _fetchFriendRequest()
        }
        if(history.location.pathname==="/friend-request"){
            activeClassIndex(1)
        }
      },fR)


      const activeClassIndex=(index)=>{
        if(active[index]!=true){
         const activeClass= active.map((item,index)=>active[index]=false)
         activeClass[index]=true
            setActive(activeClass)
            
        }         
    }


    return (
        <div className="footer-tab-container">
            <div className="home"  onClick={()=>activeClassIndex(0)}>
                <Badge content={false}  >
                <GoHome className={activeClass[0]?"icon-active":"icon"} onClick={()=>history.push('/feed')}  size={25} />
                </Badge>
            </div>
            <div className="friends" onClick={()=>activeClassIndex(1)} >
                <Badge content={fR!=null&&fR.count>0?fR.count:false} >
                <RiGroupLine className={activeClass[1]?"icon-active":"icon"} onClick={()=>history.push('/friend-request')} size={25} />
                </Badge>
            </div>
            <div className="post" onClick={()=>activeClassIndex(2)} >
            <Badge content={false} >
                <RiAddCircleLine className={activeClass[2]?"icon-active":"icon"} onClick={()=>history.push('/add-post')} size={25} />
                </Badge>
            </div>
            <div className="notification" onClick={()=>activeClassIndex(3)} >
            <Badge content={false} >
                <FiBell className={activeClass[3]?"icon-active":"icon"} size={25} />
                </Badge>
            </div>
            <div className="invite" onClick={()=>activeClassIndex(4)} >
                <Badge content={false} >
                <FaCog className={activeClass[4]?"icon-active":"icon"} size={25} />
                </Badge>
            </div>
        </div>
    )
}






const mapStateToProps=(state)=>{
    return{
       isAuthenticated:state.AuthReducer.isAuthenticated,
       fR:state.FriendRequestReducer.data
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      _Logout:()=>dispatch(action.authTokenRemoveStart()),
      _fetchFriendRequest:()=>dispatch(frndReq.fetchFriendRequest())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(FooterTab)